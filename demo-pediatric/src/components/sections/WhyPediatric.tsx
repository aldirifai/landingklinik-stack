import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { eduCards } from "@/lib/content";

const tones: Array<"coral" | "mint" | "sun"> = ["coral", "mint", "sun"];

export function WhyPediatric() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Edukasi parent</span>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
            Mengapa pakai pediatric dentist?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Anak bukan miniatur orang dewasa. Mulut, rahang, dan psikologi mereka
            butuh pendekatan yang berbeda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {eduCards.map((card, i) => (
            <Card key={card.title} className="text-center">
              <IconBadge name={card.icon} tone={tones[i % tones.length]} className="mx-auto" />
              <h3 className="mt-5 text-xl text-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
