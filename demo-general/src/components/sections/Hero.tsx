import { ArrowRight, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { clinic, heroCopy } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-canvas pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-100 blur-3xl" />
        <div className="absolute top-32 -left-16 h-64 w-64 rounded-full bg-accent-100 blur-3xl" />
      </div>

      <div className="container-page grid gap-10 sm:gap-12 lg:grid-cols-[1.1fr,1fr] lg:items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            <span className="truncate">
              Klinik gigi keluarga di Surabaya sejak {clinic.yearFounded}
            </span>
          </span>
          <h1 className="mt-5 text-3xl font-bold leading-[1.15] text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            {clinic.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
            {heroCopy.subheading}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <LinkButton href="#booking" size="lg" className="w-full sm:w-auto">
              <MessageCircle className="h-5 w-5" />
              Booking sekarang via WA
            </LinkButton>
            <LinkButton
              href="#treatments"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Lihat layanan
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-xs sm:max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-700 opacity-95" />
            <div className="absolute inset-0 grid place-items-center">
              <ToothIllustration />
            </div>
            <div className="absolute -bottom-6 -left-2 hidden rounded-lg bg-white p-4 shadow-cardHover sm:-left-6 sm:block">
              <p className="text-xs uppercase tracking-wider text-slate-500">Rating Google</p>
              <p className="mt-1 font-display text-2xl font-bold text-ink">4.9 / 5</p>
              <p className="text-xs text-slate-500">dari 320+ ulasan</p>
            </div>
            <div className="absolute -top-4 -right-2 hidden rounded-lg bg-accent-500 px-4 py-3 text-ink shadow-cardHover sm:-right-4 sm:block">
              <p className="text-xs font-medium">Konsultasi</p>
              <p className="font-display text-lg font-bold">Rp 100rb saja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToothIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="h-2/3 w-2/3 text-white" fill="none" stroke="currentColor" strokeWidth="3">
      <path
        d="M100 30c-22 0-42 12-42 36 0 18 8 30 12 50 3 14 6 30 12 38 4 6 9 8 18 8s14-2 18-8c6-8 9-24 12-38 4-20 12-32 12-50 0-24-20-36-42-36z"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M82 70c4-8 12-12 18-12s14 4 18 12" strokeLinecap="round" />
      <circle cx="160" cy="60" r="6" fill="currentColor" opacity="0.4" />
      <circle cx="40" cy="140" r="4" fill="currentColor" opacity="0.4" />
      <circle cx="170" cy="130" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
