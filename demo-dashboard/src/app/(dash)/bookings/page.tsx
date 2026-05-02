"use client";

import { useMemo, useState } from "react";
import { Topbar } from "@/components/dashboard/Topbar";
import { BookingStatusBadge } from "@/components/ui/Badge";
import { Select } from "@/components/ui/Input";
import { todayBookings, doctors } from "@/lib/data";
import type { Booking } from "@/types";
import { cn } from "@/lib/cn";

const tabs = [
  { id: "today", label: "Hari Ini" },
  { id: "tomorrow", label: "Besok" },
  { id: "week", label: "Minggu Ini" },
];

const HOURS = Array.from({ length: 12 }, (_, i) => i + 9); // 9..20

const statusBgClass: Record<Booking["status"], string> = {
  confirmed: "border-l-blue-500",
  arrived: "border-l-amber-500",
  "in-treatment": "border-l-violet-500",
  done: "border-l-emerald-500",
  noshow: "border-l-red-500",
};

export default function BookingsPage() {
  const [tab, setTab] = useState("today");
  const [doctor, setDoctor] = useState("All");

  const items = useMemo(
    () => (doctor === "All" ? todayBookings : todayBookings.filter((b) => b.doctor === doctor)),
    [doctor]
  );

  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Topbar title="Booking" />
      <main className="flex-1 overflow-auto">
        <div className="border-b border-gray-200 bg-white px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-gray-900">
                Booking hari ini
              </h2>
              <p className="text-xs text-gray-500">
                {today} • {items.length} booking{items.length !== 1 ? "" : ""}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Select value={doctor} onChange={(e) => setDoctor(e.target.value)} className="w-48">
                <option value="All">Semua dokter</option>
                {doctors.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </Select>
            </div>
          </div>
          <div className="mt-4 flex gap-1.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium transition",
                  tab === t.id
                    ? "bg-brand-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 py-8">
          {tab !== "today" ? (
            <div className="grid place-items-center rounded-md border border-dashed border-gray-300 bg-white p-16 text-center">
              <p className="text-sm font-medium text-gray-700">
                Belum ada data untuk view ini
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Demo dashboard hanya menampilkan booking hari ini. View &ldquo;Besok&rdquo; dan &ldquo;Minggu Ini&rdquo; tersedia saat dihubungkan ke backend booking.
              </p>
            </div>
          ) : (
            <ol className="relative">
              <div aria-hidden="true" className="absolute left-16 top-0 h-full w-px bg-gray-200" />
              {HOURS.map((hour) => {
                const hourLabel = `${hour.toString().padStart(2, "0")}:00`;
                const slotItems = items.filter((b) => {
                  const startHour = parseInt(b.startTime.split(":")[0]!, 10);
                  return startHour === hour;
                });
                return (
                  <li key={hour} className="relative flex gap-4 py-3">
                    <div className="w-12 shrink-0 pt-1.5 text-right text-xs font-medium text-gray-500">
                      {hourLabel}
                    </div>
                    <div className="relative ml-4 flex-1 space-y-2">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[18px] top-3 h-2 w-2 rounded-full border-2 border-white bg-gray-300"
                      />
                      {slotItems.length === 0 && (
                        <p className="text-xs italic text-gray-300">—</p>
                      )}
                      {slotItems.map((b) => (
                        <div
                          key={b.id}
                          className={cn(
                            "rounded-md border-l-4 border-y border-r border-gray-200 bg-white p-4 shadow-sm",
                            statusBgClass[b.status]
                          )}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-sm font-semibold text-gray-900">
                                {b.patientName}
                              </p>
                              <p className="mt-0.5 text-xs text-gray-500">
                                {b.startTime} • {b.durationMin} menit • {b.doctor}
                              </p>
                              <p className="mt-1 text-sm text-gray-700">
                                {b.treatment}
                              </p>
                            </div>
                            <BookingStatusBadge status={b.status} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ol>
          )}

          <p className="mt-8 text-xs text-gray-400">
            Dashboard demo untuk landingklinik.id — semua data fiktif.
          </p>
        </div>
      </main>
    </>
  );
}
