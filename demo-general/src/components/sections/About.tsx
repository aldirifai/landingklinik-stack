import { aboutCopy, clinic } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <span className="eyebrow">Tentang Klinik</span>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Klinik gigi yang fokus pada pengalaman pasien
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              {aboutCopy.paragraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
              {aboutCopy.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-brand-600 sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gradient-to-br from-brand-100 to-brand-200">
              <div className="grid h-full place-items-center text-center">
                <div className="px-6">
                  <div className="mx-auto h-16 w-16 rounded-full bg-white/70 grid place-items-center text-brand-700 font-display text-2xl font-bold">
                    DS
                  </div>
                  <p className="mt-4 font-display text-lg font-semibold text-brand-900">
                    {clinic.name}
                  </p>
                  <p className="mt-2 text-xs text-brand-700">
                    Foto interior klinik — placeholder
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-lg bg-white p-4 shadow-card">
              <p className="text-xs uppercase tracking-wider text-slate-500">Berdiri sejak</p>
              <p className="font-display text-xl font-bold text-ink">{clinic.yearFounded}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
