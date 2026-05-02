import { ArrowRight, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { clinic, heroCopy } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-canvas pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36"
    >
      <Decorations />

      <div className="container-page relative grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-coral-500" />
            Spesialis kedokteran gigi anak — Surabaya Barat
          </span>
          <h1 className="mt-5 text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[3.5rem]">
            {clinic.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
            {heroCopy.subheading}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="#booking" size="lg">
              <MessageCircle className="h-5 w-5" />
              Booking via WA
            </LinkButton>
            <LinkButton href="#methodology" variant="secondary" size="lg">
              Pelajari pendekatan kami
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-coral-200 via-sun-100 to-mint-200" />
            <div className="absolute inset-6 grid place-items-center rounded-2xl bg-white shadow-soft">
              <SmilingTooth />
            </div>
            <span className="absolute -top-3 -right-3 rounded-2xl bg-mint-400 px-4 py-2 text-xs font-extrabold text-ink shadow-soft">
              Sticker reward!
            </span>
            <span className="absolute -bottom-3 -left-3 rounded-2xl bg-sun-400 px-4 py-2 text-xs font-extrabold text-ink shadow-soft">
              Ruang anak
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmilingTooth() {
  return (
    <svg viewBox="0 0 200 200" className="h-3/4 w-3/4">
      <defs>
        <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#FECDD3" />
        </linearGradient>
      </defs>
      <path
        d="M100 30c-22 0-42 12-42 36 0 18 8 30 12 50 3 14 6 30 12 38 4 6 9 8 18 8s14-2 18-8c6-8 9-24 12-38 4-20 12-32 12-50 0-24-20-36-42-36z"
        fill="url(#toothGrad)"
        stroke="#FB7185"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="84" cy="95" r="5" fill="#1F2937" />
      <circle cx="116" cy="95" r="5" fill="#1F2937" />
      <circle cx="86" cy="93" r="1.5" fill="#FFFFFF" />
      <circle cx="118" cy="93" r="1.5" fill="#FFFFFF" />
      <path d="M82 118c5 8 14 12 18 12s13-4 18-12" fill="none" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
      <circle cx="70" cy="115" r="4" fill="#FCD34D" opacity="0.7" />
      <circle cx="130" cy="115" r="4" fill="#FCD34D" opacity="0.7" />
    </svg>
  );
}

function Decorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute -top-10 right-10 h-32 w-32 text-coral-200 opacity-60" viewBox="0 0 100 100" fill="currentColor">
        <path d="M30 50c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z" />
      </svg>
      <svg className="absolute top-32 left-8 h-20 w-20 text-mint-200 opacity-70" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 10l12 28 30 4-22 21 6 30-26-15-26 15 6-30-22-21 30-4z" />
      </svg>
      <svg className="absolute bottom-10 right-1/3 h-16 w-16 text-sun-100 opacity-90" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 15c20 5 30 18 30 35S65 80 50 80s-30-13-30-30 10-30 30-35z" />
      </svg>
    </div>
  );
}
