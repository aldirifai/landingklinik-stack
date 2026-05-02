import { ArrowRight, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { clinic, heroCopy } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-canvas pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36"
    >
      <Decorations />

      <div className="container-page relative grid gap-10 sm:gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-coral-500" />
            <span className="line-clamp-1">Spesialis kedokteran gigi anak — Surabaya Barat</span>
          </span>
          <h1 className="mt-5 text-3xl leading-[1.15] text-ink sm:text-5xl sm:leading-[1.1] lg:text-[3.5rem]">
            {clinic.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
            {heroCopy.subheading}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LinkButton href="#booking" size="lg" className="w-full sm:w-auto">
              <MessageCircle className="h-5 w-5" />
              Booking via WA
            </LinkButton>
            <LinkButton href="#methodology" variant="secondary" size="lg" className="w-full sm:w-auto">
              Pelajari pendekatan kami
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs sm:max-w-md">
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-coral-200 via-sun-100 to-mint-200" />
            <div className="absolute inset-4 grid place-items-center rounded-2xl bg-white shadow-soft sm:inset-6">
              <SmilingTooth />
            </div>
            <span className="absolute -top-2 -right-2 rounded-2xl bg-mint-400 px-3 py-1.5 text-[10px] font-extrabold text-ink shadow-soft sm:-top-3 sm:-right-3 sm:px-4 sm:py-2 sm:text-xs">
              Sticker reward!
            </span>
            <span className="absolute -bottom-2 -left-2 rounded-2xl bg-sun-400 px-3 py-1.5 text-[10px] font-extrabold text-ink shadow-soft sm:-bottom-3 sm:-left-3 sm:px-4 sm:py-2 sm:text-xs">
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
      <svg className="absolute -top-6 right-2 h-20 w-20 text-coral-200 opacity-60 sm:-top-10 sm:right-10 sm:h-32 sm:w-32" viewBox="0 0 100 100" fill="currentColor">
        <path d="M30 50c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z" />
      </svg>
      <svg className="absolute top-24 left-2 h-12 w-12 text-mint-200 opacity-70 sm:top-32 sm:left-8 sm:h-20 sm:w-20" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 10l12 28 30 4-22 21 6 30-26-15-26 15 6-30-22-21 30-4z" />
      </svg>
      <svg className="absolute bottom-6 right-4 h-10 w-10 text-sun-100 opacity-90 sm:bottom-10 sm:right-1/3 sm:h-16 sm:w-16" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 15c20 5 30 18 30 35S65 80 50 80s-30-13-30-30 10-30 30-35z" />
      </svg>
    </div>
  );
}
