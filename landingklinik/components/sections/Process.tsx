import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { processContent } from "@/content/main";

export function Process() {
  return (
    <section id="proses" className="border-b border-border bg-background py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Cara kerja" title={processContent.heading} />
        <div className="relative mt-10 sm:mt-14">
          <div
            aria-hidden="true"
            className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:left-0 md:top-7 md:h-px md:w-full"
          />
          <ol className="relative grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-4 md:gap-6">
            {processContent.steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={idx * 80}>
                  <li className="relative pl-14 md:pl-0 md:pt-16">
                    <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-primary md:left-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      {step.label}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
