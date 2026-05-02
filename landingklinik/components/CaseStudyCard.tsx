import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/content/case-studies";
import { ThumbnailPlaceholder } from "./ThumbnailPlaceholder";

type Props = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: Props) {
  return (
    <Link
      href={`/case-study/${caseStudy.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <ThumbnailPlaceholder
        gradient={caseStudy.thumbnailGradient}
        label={caseStudy.name}
        alt={`Mockup case study ${caseStudy.name}`}
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-foreground">
            {caseStudy.categoryLabel}
          </span>
          <span>{caseStudy.year}</span>
        </div>
        <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
          {caseStudy.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {caseStudy.oneLineResult}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-primary">
          Lihat detail
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
