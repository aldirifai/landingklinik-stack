import { gallery } from "@/lib/content";
import { galleryPhotos } from "@/lib/images";

export function Gallery() {
  return (
    <section id="gallery" className="section bg-white">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">Hasil pasien</span>
            <h2 className="display-h2 mt-3 text-navy-900">
              Gallery before & after
            </h2>
          </div>
          <p className="max-w-xs text-sm text-navy-500">
            Foto dipublikasikan dengan izin tertulis pasien. Hasil dapat
            bervariasi tergantung kondisi awal dan kepatuhan perawatan.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, i) => {
            const pair = galleryPhotos[i % galleryPhotos.length]!;
            return (
              <figure
                key={item.caption}
                className="group overflow-hidden rounded-md border border-navy-100 bg-navy-50/50"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-2">
                    <div className="relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={pair.before}
                        alt={`Before — ${item.treatment}`}
                        className="h-full w-full object-cover grayscale-[40%]"
                        loading="lazy"
                        width={300}
                        height={600}
                      />
                      <span className="absolute left-2 top-2 rounded-sm bg-white/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-navy-700">
                        Before
                      </span>
                    </div>
                    <div className="relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={pair.after}
                        alt={`After — ${item.treatment}`}
                        className="h-full w-full object-cover saturate-[1.1]"
                        loading="lazy"
                        width={300}
                        height={600}
                      />
                      <span className="absolute left-2 top-2 rounded-sm bg-gold-500 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
                        After
                      </span>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/80" />
                </div>
                <figcaption className="border-t border-navy-100 p-4">
                  <p className="text-[10px] uppercase tracking-wider text-gold-700">
                    {item.treatment}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-navy-800">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
