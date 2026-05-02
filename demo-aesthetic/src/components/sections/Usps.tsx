import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { usps } from "@/lib/content";

export function Usps() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Mengapa kami</span>
          <h2 className="display-h2 mt-3 text-navy-900">
            Standar yang membedakan
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp) => (
            <Card key={usp.title} className="flex flex-col gap-4">
              <IconBadge name={usp.icon} />
              <h3 className="font-display text-lg text-navy-900">{usp.title}</h3>
              <p className="text-sm leading-relaxed text-navy-700">
                {usp.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
