import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Kebijakan Privasi",
  description: `Kebijakan privasi ${siteConfig.name}: cara data pengunjung dan klien dikumpulkan, digunakan, disimpan, dan dilindungi sesuai standar layanan kami.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container size="md">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Terakhir diperbarui: 1 Mei 2026
        </p>

        <div className="prose prose-slate mt-8 max-w-none text-foreground/90">
          <p className="leading-relaxed">
            {siteConfig.name} menghormati privasi pengunjung situs ini dan klien yang menggunakan layanan kami. Halaman ini menjelaskan informasi apa yang kami kumpulkan dan bagaimana kami menggunakannya.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold">
            Informasi yang dikumpulkan
          </h2>
          <p className="mt-3 leading-relaxed">
            Saat Anda menghubungi kami melalui WhatsApp atau email, kami menerima informasi yang Anda kirim langsung (nama, kontak, detail kebutuhan). Saat Anda mengakses situs ini, kami mungkin mengumpulkan data analitik standar (halaman yang dikunjungi, sumber traffic, perangkat) melalui Google Analytics.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold">
            Penggunaan informasi
          </h2>
          <p className="mt-3 leading-relaxed">
            Informasi yang kami terima digunakan untuk merespons inquiry, mengeksekusi project yang disepakati, dan memperbaiki kualitas situs. Kami tidak menjual atau menyewakan data Anda ke pihak ketiga.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold">
            Cookie dan analitik
          </h2>
          <p className="mt-3 leading-relaxed">
            Situs ini menggunakan cookie analitik untuk memahami pola penggunaan secara agregat. Anda dapat menonaktifkan cookie via pengaturan browser kapan saja.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold">Kontak</h2>
          <p className="mt-3 leading-relaxed">
            Pertanyaan terkait kebijakan ini bisa dikirim ke{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
