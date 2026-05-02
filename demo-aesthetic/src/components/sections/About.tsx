import { aboutCopy, clinic } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-[1fr,1.1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-md bg-gradient-to-br from-navy-700 to-navy-900">
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <div className="mx-auto h-20 w-20 rounded-full border border-gold-500/40 grid place-items-center font-display text-2xl text-gold-400">
                      SA
                    </div>
                    <p className="mt-4 font-display text-xl text-white/90">
                      Interior klinik
                    </p>
                    <p className="mt-1 text-xs text-white/50">
                      Foto placeholder — ganti dengan foto klinik asli
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-md border border-gold-500/30 bg-white px-6 py-5 shadow-refined sm:block">
                <p className="text-[10px] uppercase tracking-widest text-navy-400">
                  Berdiri sejak
                </p>
                <p className="font-display text-2xl text-navy-900">
                  {clinic.yearFounded}
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="eyebrow">Tentang kami</span>
            <h2 className="display-h2 mt-3 text-navy-900">
              {aboutCopy.heading}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-700">
              {aboutCopy.paragraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
