import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `Ketentuan layanan ${siteConfig.name}: scope project, pembayaran, revisi, garansi, dan penghentian project.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container size="md">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Terakhir diperbarui: 1 Mei 2026
        </p>

        <div className="prose prose-slate mt-8 max-w-none text-foreground/90">
          <p className="leading-relaxed">
            Halaman ini merangkum ketentuan dasar saat Anda bekerja sama dengan {siteConfig.name}. Detail spesifik per project dituangkan di Service Agreement terpisah saat kick-off.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold">Scope project</h2>
          <p className="mt-3 leading-relaxed">
            Scope project mengacu pada deliverable yang tertera di paket Klinik Online Starter Pack atau scope yang disepakati tertulis sebelum kick-off. Penambahan scope di luar itu dianggap perubahan scope dan akan diestimasi terpisah.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold">Pembayaran</h2>
          <p className="mt-3 leading-relaxed">
            Pembayaran dibagi 50% di awal sebagai DP setelah agreement, dan 50% di handoff. Refund DP dimungkinkan jika project belum dimulai. Setelah masuk fase desain, refund mengikuti pembagian milestone yang sudah dikerjakan.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold">Revisi dan garansi</h2>
          <p className="mt-3 leading-relaxed">
            Setiap project dapat 2 round revisi major dan unlimited tweak detail kecil. Garansi bug fix berlaku 30 hari setelah launch untuk bug yang berasal dari code base kami.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold">Hak dan kepemilikan</h2>
          <p className="mt-3 leading-relaxed">
            Setelah pelunasan, hak penggunaan landing page dan asset turunan diberikan kepada klien. Komponen open-source tetap di bawah lisensi masing-masing.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold">Kontak</h2>
          <p className="mt-3 leading-relaxed">
            Kirim pertanyaan terkait terms ke{" "}
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
