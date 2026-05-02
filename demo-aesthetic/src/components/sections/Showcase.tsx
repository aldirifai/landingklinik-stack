import { ArrowUpRight } from "lucide-react";
import { showcase } from "@/lib/content";

export function Showcase() {
  return (
    <section id="showcase" className="section bg-navy-50/40">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Layanan premium</span>
          <h2 className="display-h2 mt-3 text-navy-900">
            Setiap treatment dirancang dengan presisi
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 sm:grid-cols-2">
          {showcase.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-md border border-navy-100 bg-white p-6 transition hover:border-gold-500/40 hover:shadow-refined sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl text-navy-900 sm:text-2xl">
                  {item.name}
                </h3>
                <ArrowUpRight className="h-5 w-5 text-navy-300 transition group-hover:text-gold-600" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy-700">
                {item.description}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-4">
                <span className="h-1 w-8 bg-gold-500" />
                <span className="text-xs uppercase tracking-wider text-gold-700">
                  {item.highlight}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
