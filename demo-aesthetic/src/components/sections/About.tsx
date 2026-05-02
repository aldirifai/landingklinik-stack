import { aboutCopy, clinic } from "@/lib/content";
import { photos } from "@/lib/images";

export function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-md bg-navy-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photos.clinicInterior}
                  alt={`Interior klinik ${clinic.name}`}
                  className="h-full w-full object-cover opacity-95"
                  loading="lazy"
                  width={1000}
                  height={1250}
                />
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
