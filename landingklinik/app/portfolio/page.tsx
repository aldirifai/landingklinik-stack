import type { Metadata } from "next";

import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Container } from "@/components/Container";
import { caseStudies } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio Landing Page Klinik Gigi",
  description:
    "Case study landing page klinik gigi: tantangan klinik, pendekatan desain, integrasi WhatsApp booking, dan hasil terukur 3 minggu setelah launch.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
              Portfolio
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Case studies
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Project yang sudah saya kerjakan untuk klinik gigi di Indonesia. Setiap case study mendokumentasikan tantangan klinik, pendekatan yang saya ambil, dan hasil terukur setelah launch.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <Container>
          <div className="mb-6 rounded-lg border border-dashed border-border bg-card/60 px-4 py-3 text-sm text-muted-foreground">
            <strong className="font-semibold text-foreground">Catatan:</strong>{" "}
            Case study di bawah adalah demonstrasi format menggunakan klien hypothetical, sambil portfolio asli sedang dibangun.
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <CaseStudyCard key={c.slug} caseStudy={c} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
