import { Card } from "@/components/ui/Card";
import { doctors } from "@/lib/content";
import { doctorAvatars } from "@/lib/images";

const accents = ["bg-coral-100 ring-coral-200", "bg-mint-100 ring-mint-200"];

export function Doctors() {
  return (
    <section id="doctors" className="section bg-canvas">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Tim spesialis</span>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
            Dua spesialis Sp.KGA
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {doctors.map((doc, i) => (
            <Card key={doc.name}>
              <div className="flex items-center gap-4">
                <div className={`h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-4 ${accents[i % 2]}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={doctorAvatars[doc.name]}
                    alt={`Avatar ${doc.name}`}
                    className="h-full w-full"
                    loading="lazy"
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <p className="font-display text-lg font-extrabold text-ink">{doc.name}</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-coral-600">
                    {doc.specialty}
                  </p>
                </div>
              </div>
              <dl className="mt-5 space-y-2 rounded-2xl bg-canvas p-4 text-sm">
                <Row label="Pendidikan" value={doc.education} />
                <Row label="Sertifikasi" value={doc.certification} />
                <Row label="Pengalaman" value={doc.experience} />
              </dl>
              <p className="mt-5 text-sm leading-relaxed text-slate-700">
                {doc.bio}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </dt>
      <dd className="text-slate-800">{value}</dd>
    </div>
  );
}
