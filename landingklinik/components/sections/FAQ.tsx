import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { faqContent } from "@/content/main";

export function FAQ() {
  return (
    <section id="faq" className="border-b border-border bg-background py-20 sm:py-24">
      <Container size="md">
        <SectionHeading eyebrow="FAQ" title={faqContent.heading} />

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqContent.items.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="leading-relaxed text-foreground/85">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
