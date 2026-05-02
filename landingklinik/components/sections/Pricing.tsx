import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingContent } from "@/content/main";
import { waLink, waMessages } from "@/lib/whatsapp";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b border-border bg-secondary/40 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Harga"
          title={pricingContent.heading}
          subtitle={pricingContent.subheading}
        />
        <div className="mx-auto mt-12 max-w-2xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
              />
              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  Paket utama
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {pricingContent.primary.title}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <p className="font-display text-4xl font-bold text-foreground">
                    {pricingContent.primary.price}
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {pricingContent.primary.sub}
                </p>

                <ul className="mt-7 space-y-3 border-t border-border pt-7">
                  {pricingContent.primary.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-success"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button asChild size="lg" className="w-full">
                    <a
                      href={waLink(waMessages.pricingInquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pricingContent.primary.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-5 rounded-xl border border-dashed border-border bg-card/60 p-6 sm:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-display text-base font-semibold text-foreground">
                    {pricingContent.secondary.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {pricingContent.secondary.body}
                  </p>
                </div>
                <p className="shrink-0 font-display text-xl font-semibold text-foreground">
                  {pricingContent.secondary.price}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
