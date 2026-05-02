import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { finalCtaContent } from "@/content/main";
import { waLink, waMessages } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-primary py-14 text-primary-foreground sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.16),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(255,255,255,0.12),transparent_55%)]"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {finalCtaContent.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
            {finalCtaContent.subhead}
          </p>
          <div className="mt-8 flex justify-center sm:mt-9">
            <Button asChild variant="invert" size="xl" className="w-full sm:w-auto">
              <a
                href={waLink(waMessages.defaultInquiry)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                {finalCtaContent.ctaLabel}
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
