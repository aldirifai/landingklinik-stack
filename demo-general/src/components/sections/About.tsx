import { aboutCopy, clinic } from "@/lib/content";
import { photos } from "@/lib/images";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <span className="eyebrow">Tentang Klinik</span>
            <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
              Klinik gigi yang fokus pada pengalaman pasien
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {aboutCopy.paragraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 sm:gap-4 sm:pt-8">
              {aboutCopy.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-xl font-bold text-brand-600 sm:text-2xl lg:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-brand-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos.clinicInterior}
                alt={`Interior klinik ${clinic.name}`}
                className="h-full w-full object-cover"
                loading="lazy"
                width={1000}
                height={1250}
              />
            </div>
            <div className="absolute -bottom-4 right-2 rounded-lg bg-white p-3 shadow-card sm:-right-4 sm:p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">Berdiri sejak</p>
              <p className="font-display text-lg font-bold text-ink sm:text-xl">{clinic.yearFounded}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
