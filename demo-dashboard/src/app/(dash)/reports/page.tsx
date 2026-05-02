"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  TrendingUp,
  Repeat,
  Award,
  Clock,
} from "lucide-react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from "recharts";
import { Topbar } from "@/components/dashboard/Topbar";
import {
  bookingTrend30d,
  inquiriesPerDay,
  topTreatments,
  treatmentBreakdown,
} from "@/lib/data";
import { formatRupiahShort } from "@/lib/format";
import { cn } from "@/lib/cn";

const PIE_COLORS = ["#2563EB", "#10B981", "#F59E0B", "#8B5CF6", "#EC4899", "#6B7280"];

const stats = [
  {
    label: "Inquiry minggu ini",
    value: "126",
    delta: 12,
    icon: TrendingUp,
    sub: "vs minggu lalu",
  },
  {
    label: "Conversion rate",
    value: "68%",
    delta: 4,
    icon: Repeat,
    sub: "inquiry → booking",
  },
  {
    label: "Most popular",
    value: "Scaling",
    delta: 0,
    icon: Award,
    sub: "32% dari semua treatment",
  },
  {
    label: "Avg response time",
    value: "23 mnt",
    delta: -8,
    icon: Clock,
    sub: "lebih cepat dari minggu lalu",
  },
];

export default function ReportsPage() {
  return (
    <>
      <Topbar title="Reports" />
      <main className="flex-1 overflow-auto">
        <div className="px-6 py-6 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => {
              const Icon = s.icon;
              const positive = s.delta > 0;
              const negative = s.delta < 0;
              return (
                <div
                  key={s.label}
                  className="rounded-lg border border-gray-200 bg-white p-5"
                >
                  <div className="flex items-start justify-between">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      {s.label}
                    </p>
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-brand-50 text-brand-600">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-2xl font-bold text-gray-900 tabular-nums">
                    {s.value}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-xs">
                    {s.delta !== 0 && (
                      <span
                        className={cn(
                          "inline-flex items-center gap-0.5 font-medium",
                          positive && "text-emerald-600",
                          negative && "text-red-600"
                        )}
                      >
                        {positive ? (
                          <ArrowUpRight className="h-3 w-3" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3" />
                        )}
                        {Math.abs(s.delta)}%
                      </span>
                    )}
                    <span className="text-gray-500">{s.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Inquiry per hari
                </h3>
                <p className="text-xs text-gray-500">7 hari terakhir</p>
              </div>
              <span className="text-xs font-medium text-emerald-600">+12% vs minggu lalu</span>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer>
                <BarChart data={inquiriesPerDay} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                  <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ borderRadius: 8, border: "1px solid #E5E7EB", fontSize: 12 }}
                    cursor={{ fill: "#F3F4F6" }}
                  />
                  <Bar dataKey="inquiries" fill="#2563EB" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Treatment breakdown
              </h3>
              <p className="text-xs text-gray-500">30 hari terakhir</p>
              <div className="mt-4 h-64 w-full">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={treatmentBreakdown}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={50}
                      outerRadius={85}
                      paddingAngle={2}
                    >
                      {treatmentBreakdown.map((_, i) => (
                        <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ borderRadius: 8, border: "1px solid #E5E7EB", fontSize: 12 }}
                    />
                    <Legend
                      wrapperStyle={{ fontSize: 12 }}
                      iconType="circle"
                      iconSize={8}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Booking trend
              </h3>
              <p className="text-xs text-gray-500">30 hari terakhir</p>
              <div className="mt-4 h-64 w-full">
                <ResponsiveContainer>
                  <LineChart data={bookingTrend30d} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                    <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ borderRadius: 8, border: "1px solid #E5E7EB", fontSize: 12 }}
                      cursor={{ stroke: "#E5E7EB" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="bookings"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={{ r: 3, fill: "#10B981" }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="border-b border-gray-200 px-5 py-4">
              <h3 className="text-sm font-semibold text-gray-900">
                Top performing treatment
              </h3>
              <p className="text-xs text-gray-500">30 hari terakhir, by volume</p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-canvas text-left text-xs uppercase tracking-wider text-gray-500">
                  <th className="px-5 py-3 font-medium">Treatment</th>
                  <th className="px-5 py-3 font-medium text-right">Jumlah</th>
                  <th className="px-5 py-3 font-medium text-right">Revenue</th>
                  <th className="px-5 py-3 font-medium text-right">vs bulan lalu</th>
                </tr>
              </thead>
              <tbody>
                {topTreatments.map((t) => (
                  <tr key={t.name} className="border-b border-gray-100 last:border-0">
                    <td className="px-5 py-3 font-medium text-gray-900">{t.name}</td>
                    <td className="px-5 py-3 text-right tabular-nums text-gray-700">{t.count}</td>
                    <td className="px-5 py-3 text-right tabular-nums text-gray-900">
                      {formatRupiahShort(t.revenue)}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span
                        className={cn(
                          "inline-flex items-center gap-0.5 text-xs font-medium",
                          t.growth > 0 ? "text-emerald-600" : "text-red-600"
                        )}
                      >
                        {t.growth > 0 ? (
                          <ArrowUpRight className="h-3 w-3" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3" />
                        )}
                        {Math.abs(t.growth)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400">
            Dashboard demo untuk landingklinik.id — semua data fiktif.
          </p>
        </div>
      </main>
    </>
  );
}
