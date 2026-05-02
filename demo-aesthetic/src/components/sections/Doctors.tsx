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
    <section id="doctors" className="section bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Tim spesialis</span>
          <h2 className="display-h2 mt-3 text-navy-900">
            Dua spesialis, satu visi presisi
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {doctors.map((doc) => (
            <Card key={doc.name} className="p-0 overflow-hidden">
              <div className="grid gap-6 p-7 sm:grid-cols-[140px,1fr] sm:p-9">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gradient-to-br from-navy-700 to-navy-900 sm:w-[140px]">
                  <div className="grid h-full place-items-center">
                    <span className="font-display text-3xl text-gold-400">
                      {initials(doc.name)}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-display text-2xl text-navy-900">{doc.name}</p>
                  <p className="text-xs uppercase tracking-wider text-gold-700">
                    {doc.title}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-navy-700">
                    {doc.credentials.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs italic text-navy-500">
                    {doc.experience}
                  </p>
                </div>
              </div>
              <div className="border-t border-navy-100 bg-navy-50/40 p-7 sm:p-9">
                <p className="text-sm leading-relaxed text-navy-800">{doc.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {doc.certifications.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-gold-500/40 bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gold-700"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
