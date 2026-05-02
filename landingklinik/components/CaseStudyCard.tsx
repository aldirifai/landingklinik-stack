import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import type { CaseStudy } from "@/content/case-studies";
import { ThumbnailPlaceholder } from "./ThumbnailPlaceholder";

type Props = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-md">
      <Link
        href={`/case-study/${caseStudy.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <ThumbnailPlaceholder
          gradient={caseStudy.thumbnailGradient}
          label={caseStudy.categoryLabel}
          demoUrl={caseStudy.demoUrl}
          alt={`Mockup case study ${caseStudy.name}`}
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-foreground">
            {caseStudy.categoryLabel}
          </span>
          <span>{caseStudy.year}</span>
        </div>
        <Link
          href={`/case-study/${caseStudy.slug}`}
          className="font-display text-lg font-semibold leading-snug text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
        >
          {caseStudy.name}
        </Link>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {caseStudy.oneLineResult}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
          <Link
            href={`/case-study/${caseStudy.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Lihat detail
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          {caseStudy.demoUrl ? (
            <a
              href={caseStudy.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
            >
              Lihat demo
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
