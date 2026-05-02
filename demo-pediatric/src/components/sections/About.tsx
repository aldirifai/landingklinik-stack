import { aboutCopy, clinic } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <span className="eyebrow">Tentang Si Senyum</span>
            <h2 className="mt-3 text-2xl text-ink sm:text-3xl lg:text-4xl">
              Klinik yang berdiri dari pengalaman pribadi
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
              {aboutCopy.paragraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-2 rounded-2xl border-2 border-coral-100 bg-white p-4 sm:gap-4 sm:p-5">
              {aboutCopy.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dd className="font-display text-2xl font-extrabold text-coral-500 sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-xs">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mt-4 lg:mt-0">
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
            <div className="absolute -bottom-3 -right-2 rounded-2xl border-2 border-mint-200 bg-white px-4 py-3 shadow-soft sm:-bottom-4 sm:-right-4 sm:px-5 sm:py-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-xs">
                Sejak
              </p>
              <p className="font-display text-xl font-extrabold text-mint-600 sm:text-2xl">
                {clinic.yearFounded}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
