import { ArrowRight, ChevronDown } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { clinic, heroCopy } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[560px] flex-col justify-end overflow-hidden bg-navy-900 text-white sm:min-h-[680px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(30,58,138,0.6),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(201,169,97,0.18),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,15,30,0.3)_0%,rgba(10,15,30,0.85)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="container-page relative pt-28 pb-16 sm:pt-48 sm:pb-28 lg:pt-56 lg:pb-32">
        <span className="eyebrow text-gold-400">{heroCopy.eyebrow}</span>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-light leading-[1.08] sm:mt-5 sm:text-5xl md:text-6xl lg:text-[5rem] lg:leading-[1.02]">
          {clinic.tagline}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
          {heroCopy.subheading}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
          <LinkButton href="#booking" size="lg" className="w-full justify-center bg-gold-500 text-navy-900 hover:bg-gold-600 sm:w-auto">
            Konsultasi gratis
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
          <LinkButton href="#gallery" size="lg" variant="outline-light" className="w-full justify-center sm:w-auto">
            Lihat hasil pasien
          </LinkButton>
        </div>
      </div>

      <a
        href="#trust"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-gold-400 md:flex"
      >
        Scroll
        <ChevronDown className="h-4 w-4" />
      </a>
    </section>
  );
}
