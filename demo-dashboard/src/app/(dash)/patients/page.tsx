"use client";

import { useMemo, useState } from "react";
import { Search, MoreHorizontal } from "lucide-react";
import { Topbar } from "@/components/dashboard/Topbar";
import { Select } from "@/components/ui/Input";
import { patients } from "@/lib/data";
import { formatDate, formatRupiahShort } from "@/lib/format";

type RangeFilter = "all" | "month" | "3months" | "6months" | "older";

const filterLabels: Record<RangeFilter, string> = {
  all: "Semua waktu",
  month: "Bulan ini",
  "3months": "3 bulan terakhir",
  "6months": "6 bulan terakhir",
  older: "Lebih dari 6 bulan",
};

function inRange(lastVisitISO: string, range: RangeFilter): boolean {
  if (range === "all") return true;
  const days = (Date.now() - new Date(lastVisitISO).getTime()) / 86_400_000;
  if (range === "month") return days <= 30;
  if (range === "3months") return days <= 90;
  if (range === "6months") return days <= 180;
  return days > 180;
}

export default function PatientsPage() {
  const [query, setQuery] = useState("");
  const [range, setRange] = useState<RangeFilter>("all");

  const filtered = useMemo(() => {
    let out = patients;
    if (range !== "all") out = out.filter((p) => inRange(p.lastVisit, range));
    if (query.trim()) {
      const q = query.toLowerCase();
      out = out.filter(
        (p) =>
          p.name.toLowerCase().includes(q) || p.phone.toLowerCase().includes(q)
      );
    }
    return out;
  }, [query, range]);

  return (
    <>
      <Topbar title="Database Pasien" />
      <main className="flex-1 overflow-auto">
        <div className="border-b border-gray-200 bg-white px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-gray-900">
                {filtered.length} pasien
              </h2>
              <p className="text-xs text-gray-500">
                Total {patients.length} pasien terdaftar
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Select
                value={range}
                onChange={(e) => setRange(e.target.value as RangeFilter)}
                className="w-44"
              >
                {(Object.keys(filterLabels) as RangeFilter[]).map((k) => (
                  <option key={k} value={k}>{filterLabels[k]}</option>
                ))}
              </Select>
              <div className="relative w-72">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari nama atau HP..."
                  className="h-9 w-full rounded-md border border-gray-200 bg-white pl-9 pr-3 text-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-canvas text-left text-xs uppercase tracking-wider text-gray-500">
                <th className="px-6 py-3 font-medium">Nama</th>
                <th className="px-6 py-3 font-medium">HP</th>
                <th className="px-6 py-3 font-medium">Last visit</th>
                <th className="px-6 py-3 font-medium text-right">Visits</th>
                <th className="px-6 py-3 font-medium">Last treatment</th>
                <th className="px-6 py-3 font-medium text-right">Total spent</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-16 text-center text-sm text-gray-500">
                    Tidak ada pasien yang cocok dengan filter.
                  </td>
                </tr>
              )}
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-gray-100 hover:bg-canvas">
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
                        {p.name.split(" ").slice(0, 2).map((s) => s[0]).join("")}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{p.name}</p>
                        <p className="text-xs text-gray-400">{p.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-gray-600">{p.phone}</td>
                  <td className="px-6 py-3 text-gray-600">{formatDate(p.lastVisit)}</td>
                  <td className="px-6 py-3 text-right tabular-nums text-gray-900">{p.totalVisits}</td>
                  <td className="px-6 py-3 text-gray-700">{p.lastTreatment}</td>
                  <td className="px-6 py-3 text-right tabular-nums font-medium text-gray-900">
                    {formatRupiahShort(p.totalSpent)}
                  </td>
                  <td className="px-6 py-3 text-right">
                    <button
                      type="button"
                      aria-label="More"
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
          Dashboard demo untuk landingklinik.id — semua data fiktif.
        </p>
      </main>
    </>
  );
}
