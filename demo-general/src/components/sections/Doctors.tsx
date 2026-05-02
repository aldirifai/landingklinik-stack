import { Card } from "@/components/ui/Card";
import { doctors } from "@/lib/content";

function initials(name: string) {
  const cleaned = name.replace(/^drg\.\s*/i, "");
  return cleaned
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function Doctors() {
  return (
    <section id="doctors" className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Tim Dokter</span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Tim dokter kami
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Tiga dokter gigi umum yang aktif praktik harian, dengan fokus klinis
            yang saling melengkapi.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {doctors.map((doc) => (
            <Card key={doc.name} className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-100 font-display text-lg font-bold text-brand-700">
                  {initials(doc.name)}
                </div>
                <div>
                  <p className="font-display font-bold text-ink">{doc.name}</p>
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
