import { aboutCopy, clinic } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <span className="eyebrow">Tentang Si Senyum</span>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
              Klinik yang berdiri dari pengalaman pribadi
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
              {aboutCopy.paragraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border-2 border-coral-100 bg-white p-5">
              {aboutCopy.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dd className="font-display text-3xl font-extrabold text-coral-500">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-mint-200 via-sun-100 to-coral-200">
              <div className="grid h-full place-items-center text-center">
                <div className="px-6">
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-white grid place-items-center text-coral-500 font-display text-2xl font-extrabold">
                    SS
                  </div>
                  <p className="mt-4 font-display text-lg font-bold text-ink">
                    {clinic.name}
                  </p>
                  <p className="mt-2 text-xs text-slate-700">
                    Foto interior klinik — placeholder
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl border-2 border-mint-200 bg-white px-5 py-4 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Sejak
              </p>
              <p className="font-display text-2xl font-extrabold text-mint-600">
                {clinic.yearFounded}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
