import { IconBadge } from "@/components/ui/IconBadge";
import { Card } from "@/components/ui/Card";
import { clinic, usps } from "@/lib/content";

export function Usps() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Mengapa kami</span>
          <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
            Mengapa pasien memilih {clinic.name}
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
          {usps.map((usp) => (
            <Card key={usp.title} className="flex gap-4 p-5 sm:gap-5 sm:p-6">
              <IconBadge name={usp.icon} className="shrink-0" />
              <div className="min-w-0">
                <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                  {usp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
