import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="section bg-navy-50/40">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Suara pasien</span>
          <h2 className="display-h2 mt-3 text-navy-900">
            Cerita dari mereka yang sudah berinvestasi
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-md border border-navy-100 bg-white p-8"
            >
              <Quote className="h-8 w-8 text-gold-500" />
              <blockquote className="mt-6 flex-1 font-display text-xl italic leading-snug text-navy-900">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-navy-100 pt-5">
                <p className="font-medium text-navy-900">{t.name}</p>
                <p className="text-xs uppercase tracking-wider text-gold-700">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
