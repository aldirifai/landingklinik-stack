import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudyPreviewContent } from "@/content/main";
import { caseStudies } from "@/content/case-studies";

export function CaseStudyPreview() {
  const previewItems = caseStudies.slice(0, 3);

  return (
    <section
      id="case-studies"
      className="border-b border-border bg-background py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Case studies"
          title={caseStudyPreviewContent.heading}
          subtitle={caseStudyPreviewContent.subheading}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previewItems.map((c, idx) => (
            <Reveal key={c.slug} delay={idx * 80}>
              <CaseStudyCard caseStudy={c} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Lihat semua case study
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
