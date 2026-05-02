import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <section className="section bg-navy-50/40">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.5fr] lg:gap-16">
          <div>
            <span className="eyebrow">Pertanyaan</span>
            <h2 className="display-h2 mt-3 text-navy-900">
              Jawaban untuk pertimbangan Anda
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-navy-600">
              Pertanyaan tidak terjawab? Tim concierge kami senang menjelaskan
              langsung via WhatsApp atau dalam konsultasi gratis.
            </p>
          </div>
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
