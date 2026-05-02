import { Github, Instagram, Linkedin } from "lucide-react";

import { Container } from "@/components/Container";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutContent } from "@/content/main";
import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border bg-secondary/40 py-14 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading eyebrow="About" title={aboutContent.heading} />

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 items-start gap-8 sm:mt-12 sm:gap-10 md:grid-cols-[1fr_1.4fr] md:gap-12">
          <Reveal className="mx-auto w-full max-w-xs md:max-w-none">
            <PortraitPlaceholder
              name="Aldi Founder Surabaya"
              initials="AL"
              alt={`Foto ${siteConfig.founder.name}, ${siteConfig.founder.role}`}
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5">
              {aboutContent.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-sm leading-relaxed text-foreground/90 sm:text-base"
                >
                  {p}
                </p>
              ))}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-muted-foreground">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
