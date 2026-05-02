import { Card } from "@/components/ui/Card";
import { doctors } from "@/lib/content";
import { doctorAvatars } from "@/lib/images";

export function Doctors() {
  return (
    <section id="doctors" className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Tim Dokter</span>
          <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
            Tim dokter kami
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Tiga dokter gigi umum yang aktif praktik harian, dengan fokus klinis
            yang saling melengkapi.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {doctors.map((doc) => (
            <Card key={doc.name} className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-brand-100 ring-2 ring-brand-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={doctorAvatars[doc.name]}
                    alt={`Avatar ${doc.name}`}
                    className="h-full w-full"
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display font-bold text-ink">{doc.name}</p>
                  <p className="text-xs text-slate-500">{doc.specialty}</p>
                </div>
              </div>
              <dl className="mt-5 space-y-2 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-400">
                    Pendidikan
                  </dt>
                  <dd className="text-slate-700">{doc.education}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-400">
                    Fokus
                  </dt>
                  <dd className="text-slate-700">{doc.focus}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-400">
                    Pengalaman
                  </dt>
                  <dd className="text-slate-700">{doc.experience}</dd>
                </div>
              </dl>
              <p className="mt-5 border-t border-slate-200 pt-4 text-sm leading-relaxed text-slate-600">
                {doc.bio}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
