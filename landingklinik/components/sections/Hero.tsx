import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { HeroMockup } from "@/components/HeroMockup";
import { heroContent } from "@/content/main";
import { waLink, waMessages } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/40 via-background to-background"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-10%,hsl(var(--primary)/0.08),transparent_55%)]"
      />
      <Container className="grid grid-cols-1 items-center gap-10 py-14 sm:gap-12 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="max-w-xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Spesialis klinik gigi · Indonesia
          </p>
          <h1 className="text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            {heroContent.headline}
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            {heroContent.subheadline}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button asChild size="lg">
              <a
                href={waLink(waMessages.defaultInquiry)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                {heroContent.primaryCta.label}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#case-studies">
                {heroContent.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <dl className="mt-8 grid max-w-md grid-cols-3 gap-3 border-t border-border pt-6 sm:mt-10 sm:gap-6">
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                Project
              </dt>
              <dd className="mt-1 font-display text-base font-semibold text-foreground sm:text-lg">
                3 minggu
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                Harga
              </dt>
              <dd className="mt-1 font-display text-base font-semibold text-foreground sm:text-lg">
                Rp 5,5jt
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                Garansi
              </dt>
              <dd className="mt-1 font-display text-base font-semibold text-foreground sm:text-lg">
                30 hari
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-2xl"
          />
          <HeroMockup />
        </div>
      </Container>
    </section>
  );
}
