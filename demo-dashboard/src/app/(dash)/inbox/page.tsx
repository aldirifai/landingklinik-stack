"use client";

import { useMemo, useState } from "react";
import { Search, MoreHorizontal } from "lucide-react";
import { Topbar } from "@/components/dashboard/Topbar";
import { StatusBadge, SourceBadge } from "@/components/ui/Badge";
import { InquiryDetailPanel } from "@/components/dashboard/InquiryDetailPanel";
import { inquiries as initialInquiries } from "@/lib/data";
import type { Inquiry, InquiryStatus } from "@/types";
import { relativeTime } from "@/lib/format";
import { cn } from "@/lib/cn";

type Filter = "all" | InquiryStatus;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Semua" },
  { id: "new", label: "Baru" },
  { id: "contacted", label: "Dihubungi" },
  { id: "booked", label: "Sudah booking" },
  { id: "noshow", label: "No-show" },
  { id: "archived", label: "Diarsip" },
];

export default function InboxPage() {
  const [items, setItems] = useState<Inquiry[]>(initialInquiries);
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const counts = useMemo(() => {
    const c: Record<Filter, number> = {
      all: items.length,
      new: 0,
      contacted: 0,
      booked: 0,
      noshow: 0,
      archived: 0,
    };
    for (const it of items) c[it.status]++;
    return c;
  }, [items]);

  const filtered = useMemo(() => {
    let out = items;
    if (filter !== "all") out = out.filter((it) => it.status === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      out = out.filter(
        (it) =>
          it.patientName.toLowerCase().includes(q) ||
          it.phone.toLowerCase().includes(q) ||
          it.treatment.toLowerCase().includes(q)
      );
    }
    return out;
  }, [items, filter, query]);

  const selected = items.find((it) => it.id === selectedId) ?? null;

  const updateStatus = (id: string, status: InquiryStatus) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, status } : it))
    );
  };

  return (
    <>
      <Topbar title="Inbox Inquiry" />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-auto">
          <div className="border-b border-gray-200 bg-white px-6 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <h2 className="text-sm font-medium text-gray-900">
                  {filtered.length} inquiry
                </h2>
                {counts.new > 0 && (
                  <span className="inline-flex items-center rounded-full bg-status-newBg px-2.5 py-0.5 text-xs font-medium text-status-new">
                    {counts.new} unread
                  </span>
                )}
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  placeholder="Cari nama, HP, treatment..."
                  className="h-9 w-full rounded-md border border-gray-200 bg-white pl-9 pr-3 text-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition",
                    filter === f.id
                      ? "bg-brand-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  )}
                >
                  {f.label}
                  <span
                    className={cn(
                      "rounded-full px-1.5 text-[10px]",
                      filter === f.id ? "bg-white/20" : "bg-white text-gray-500"
                    )}
                  >
                    {counts[f.id]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-canvas text-left text-xs uppercase tracking-wider text-gray-500">
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Pasien</th>
                  <th className="px-6 py-3 font-medium">HP</th>
                  <th className="px-6 py-3 font-medium">Treatment</th>
                  <th className="px-6 py-3 font-medium">Masuk</th>
                  <th className="px-6 py-3 font-medium">Sumber</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-16 text-center text-sm text-gray-500">
                      Tidak ada inquiry yang cocok dengan filter.
                    </td>
                  </tr>
                )}
                {filtered.map((it) => (
                  <tr
                    key={it.id}
                    onClick={() => setSelectedId(it.id)}
                    className={cn(
                      "cursor-pointer border-b border-gray-100 hover:bg-canvas",
                      selectedId === it.id && "bg-brand-50/60"
                    )}
                  >
                    <td className="px-6 py-3"><StatusBadge status={it.status} /></td>
                    <td className="px-6 py-3 font-medium text-gray-900">{it.patientName}</td>
                    <td className="px-6 py-3 text-gray-600">{it.phone}</td>
                    <td className="px-6 py-3 text-gray-700">{it.treatment}</td>
                    <td className="px-6 py-3 text-gray-500">{relativeTime(it.createdAt)}</td>
                    <td className="px-6 py-3"><SourceBadge source={it.source} /></td>
                    <td className="px-6 py-3 text-right">
                      <button
                        type="button"
                        aria-label="More"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="px-6 py-4 text-xs text-gray-400">
            Dashboard demo untuk landingklinik.id — semua data fiktif. Action update status hanya tersimpan di state lokal.
          </p>
        </main>

        {selected && (
          <InquiryDetailPanel
            inquiry={selected}
            onClose={() => setSelectedId(null)}
            onUpdateStatus={(status) => updateStatus(selected.id, status)}
          />
        )}
      </div>
    </>
  );
}
