import { Construction } from "lucide-react";
import { Topbar } from "@/components/dashboard/Topbar";

const sections = [
  { title: "Klinik settings", description: "Nama, alamat, info kontak, link sosial media." },
  { title: "Working hours", description: "Jam operasional per dokter, libur nasional, dan special hours." },
  { title: "User management", description: "Tambah/hapus akun resepsionis, atur role dan permission." },
  { title: "Treatment & price list", description: "Edit treatment, harga, durasi standar, dan kategori." },
  { title: "Booking template", description: "Customize template message WhatsApp dan email." },
  { title: "Integrations", description: "Hubungkan ke kalender Google, Slack notif, atau webhook custom." },
];

export default function SettingsPage() {
  return (
    <>
      <Topbar title="Settings" />
      <main className="flex-1 overflow-auto">
        <div className="px-6 py-6 space-y-6">
          <div className="flex items-start gap-3 rounded-md border border-amber-200 bg-amber-50 p-4 text-amber-900">
            <Construction className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="text-sm font-medium">Coming soon</p>
              <p className="mt-1 text-xs leading-relaxed text-amber-800">
                Settings panel masih dalam pengembangan. Hubungi tim landingklinik.id untuk customize lebih lanjut.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-gray-200 bg-white p-5 opacity-70"
              >
                <p className="text-sm font-semibold text-gray-900">{s.title}</p>
                <p className="mt-1 text-xs text-gray-500">{s.description}</p>
                <span className="mt-4 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500">
                  Coming soon
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400">
            Dashboard demo untuk landingklinik.id — semua data fiktif.
          </p>
        </div>
      </main>
    </>
  );
}
