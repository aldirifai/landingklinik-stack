import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { methodology } from "@/lib/content";

const tones: Array<"coral" | "mint" | "sun"> = ["coral", "mint", "sun", "coral"];

export function Methodology() {
  return (
    <section id="methodology" className="section bg-coral-50/50">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Pendekatan kami</span>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
            Empat metode yang membuat anak rileks
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Bukan magic — ini sains psychology behavioral yang sudah teruji
            puluhan tahun di pediatric dentistry global.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {methodology.map((m, i) => (
            <Card key={m.title} className="flex gap-5">
              <IconBadge name={m.icon} tone={tones[i % tones.length]} className="shrink-0" />
              <div>
                <h3 className="text-xl text-ink">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {m.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
