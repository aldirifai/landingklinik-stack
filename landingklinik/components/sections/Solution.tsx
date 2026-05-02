import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SolutionMockup } from "@/components/SolutionMockup";
import { solutionContent } from "@/content/main";

export function Solution() {
  return (
    <section
      id="solusi"
      className="border-b border-border bg-secondary/40 py-14 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Solusi"
          title={solutionContent.heading}
          subtitle="Bukan template generic. Setiap section dirancang untuk satu tujuan: bikin pasien lebih mudah booking."
        />
        <Reveal className="mt-10 sm:mt-12">
          <SolutionMockup />
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
          {solutionContent.features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={idx * 70}>
                <div className="flex h-full gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
