import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { ArrowLeft, ArrowRight, Calendar, Clock, ExternalLink, MapPin, Quote, Tag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { ThumbnailPlaceholder } from "@/components/ThumbnailPlaceholder";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { articleSchema, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { waLink, waMessages } from "@/lib/whatsapp";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const c = getCaseStudy(params.slug);
  if (!c) {
    return buildMetadata({
      title: "Case study tidak ditemukan",
      description: "Halaman case study yang Anda cari tidak ditemukan.",
      path: `/case-study/${params.slug}`,
      noIndex: true,
    });
  }
  const description =
    `${c.categoryLabel} di ${c.location}. ${c.oneLineResult}. Case study landing page klinik gigi oleh landingklinik.id.`.slice(
      0,
      160
    );
  const publishedTime = `${c.year}-01-01`;
  return buildMetadata({
    title: `${c.name} — Case Study Landing Page Klinik Gigi`,
    description,
    path: `/case-study/${c.slug}`,
    type: "article",
    publishedTime,
  });
}

export default function CaseStudyDetailPage({ params }: { params: Params }) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();

  return (
    <>
      <article>
        <section className="border-b border-border bg-secondary/40 py-12 sm:py-16 lg:py-20">
          <Container>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke portfolio
            </Link>

            {c.isHypothetical ? (
              <div className="mt-6 inline-flex rounded-md border border-dashed border-border bg-card/60 px-3 py-2 text-xs text-muted-foreground">
                Demonstrasi case study (klien hypothetical untuk contoh format)
              </div>
            ) : null}

            <div className="mt-5 grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  {c.categoryLabel}
                </p>
                <h1 className="mt-3 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {c.name}
                </h1>
                <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {c.oneLineResult}
                </p>

                {c.demoUrl ? (
                  <div className="mt-6">
                    <Button asChild size="lg">
                      <a
                        href={c.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lihat demo live
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Demo interaktif — semua data fiktif, untuk lihat format hasil.
                    </p>
                  </div>
                ) : null}

                <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                      <MapPin className="h-3 w-3" /> Lokasi
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-foreground">
                      {c.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                      <Calendar className="h-3 w-3" /> Tahun
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-foreground">
                      {c.year}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                      <Clock className="h-3 w-3" /> Durasi
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-foreground">
                      {c.duration}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                      <Tag className="h-3 w-3" /> Kategori
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium capitalize text-foreground">
                      {c.category}
                    </dd>
                  </div>
                </dl>
              </div>

              <ThumbnailPlaceholder
                gradient={c.thumbnailGradient}
                label={c.categoryLabel}
                demoUrl={c.demoUrl}
                alt={`Mockup landing page ${c.name}`}
                className="aspect-[4/3] lg:aspect-[5/4]"
              />
            </div>
          </Container>
        </section>

        <section className="bg-background py-12 sm:py-16 lg:py-20">
          <Container size="md">
            <div className="space-y-10 sm:space-y-14">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Profil klinik
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/85">
                  {c.profile}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Tantangan yang dihadapi
                </h2>
                <ul className="mt-5 space-y-3">
                  {c.challenges.map((ch, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 rounded-lg border border-border bg-card p-4"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-rose-400"
                      />
                      <p className="text-sm leading-relaxed text-foreground/90">
                        {ch}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Solusi yang diterapkan
                </h2>
                <ul className="mt-5 space-y-3">
                  {c.solutions.map((sol, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 rounded-lg border border-border bg-card p-4"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[11px] font-semibold text-primary"
                      >
                        {idx + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground/90">
                        {sol}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Hasil
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {c.results.map((r, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {r.label}
                      </p>
                      <p className="mt-2 font-display text-2xl font-bold text-foreground">
                        {r.value}
                      </p>
                      {r.delta ? (
                        <p className="mt-1 text-xs font-medium text-success">
                          {r.delta}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Testimonial
                </h2>
                <figure className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-7 lg:p-9">
                  <Quote
                    className="h-8 w-8 text-primary/40"
                    aria-hidden="true"
                  />
                  <blockquote className="mt-3 text-balance text-base leading-relaxed text-foreground sm:text-lg lg:text-xl">
                    &ldquo;{c.testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    <div className="h-12 w-12 shrink-0">
                      <PortraitPlaceholder
                        name={c.testimonial.name}
                        initials={c.testimonial.name.charAt(0)}
                        alt={`Foto ${c.testimonial.name}`}
                        className="h-12 w-12"
                      />
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-foreground">
                        {c.testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {c.testimonial.role}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-border bg-primary py-12 text-primary-foreground sm:py-16 lg:py-20">
          <Container size="md">
            <div className="flex flex-col items-start gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-balance font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                  Mau hasil serupa untuk klinik Anda?
                </h2>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-white/85">
                  Diskusi 15 menit, gratis. Saya kasih insight terlepas Anda lanjut atau tidak.
                </p>
              </div>
              <Button asChild variant="invert" size="lg" className="w-full md:w-auto md:shrink-0">
                <a
                  href={waLink(waMessages.caseStudyFollowUp(c.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diskusi via WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </Container>
        </section>
      </article>

      <Script
        id={`article-schema-${c.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: `${c.name} — Case Study Landing Page Klinik Gigi`,
              description: `${c.categoryLabel} di ${c.location}. ${c.oneLineResult}.`,
              path: `/case-study/${c.slug}`,
              datePublished: `${c.year}-01-01`,
            })
          ),
        }}
      />
      <Script
        id={`breadcrumb-schema-${c.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Beranda", path: "/" },
              { name: "Portfolio", path: "/portfolio" },
              { name: c.name, path: `/case-study/${c.slug}` },
            ])
          ),
        }}
      />
    </>
  );
}
