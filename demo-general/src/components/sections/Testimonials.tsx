import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="section bg-brand-50/40">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Testimoni</span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Apa kata pasien kami
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="flex flex-col">
              <div className="flex items-center gap-1 text-accent-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                  {initials(t.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
