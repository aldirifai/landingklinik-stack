import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.5fr] lg:gap-16">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Pertanyaan umum
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Tidak menemukan jawabannya? Kontak kami di WhatsApp, kami senang
              menjawab langsung.
            </p>
          </div>
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
