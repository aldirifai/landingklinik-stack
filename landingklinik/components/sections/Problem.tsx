import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { problemContent } from "@/content/main";

export function Problem() {
  return (
    <section id="problem" className="border-b border-border bg-background py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Yang sering terjadi"
          title={problemContent.heading}
        />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {problemContent.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={idx * 80}>
                <div className="h-full rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-sm">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
