import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { usps } from "@/lib/content";

const tones: Array<"coral" | "mint" | "sun"> = ["coral", "mint", "sun", "coral"];

export function Usps() {
  return (
    <section className="section bg-coral-50/50">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Mengapa Si Senyum</span>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
            Yang membedakan kami
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {usps.map((usp, i) => (
            <Card key={usp.title} className="flex gap-5">
              <IconBadge name={usp.icon} tone={tones[i % tones.length]} className="shrink-0" />
              <div>
                <h3 className="text-lg text-ink">{usp.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {usp.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
