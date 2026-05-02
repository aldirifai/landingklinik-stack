import { Card } from "@/components/ui/Card";
import { Heart } from "lucide-react";
import { testimonials } from "@/lib/content";

const accents = [
  "bg-coral-100 text-coral-600",
  "bg-mint-100 text-mint-600",
  "bg-sun-100 text-sun-500",
];

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
    <section className="section bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Cerita orangtua</span>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
            Apa kata para orangtua
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={t.name} className="flex flex-col">
              <Heart className="h-6 w-6 text-coral-400" fill="currentColor" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t-2 border-coral-100 pt-4">
                <div className={`grid h-11 w-11 place-items-center rounded-2xl text-sm font-extrabold ${accents[i % accents.length]}`}>
                  {initials(t.name)}
                </div>
                <div>
                  <p className="text-sm font-extrabold text-ink">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.context}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
