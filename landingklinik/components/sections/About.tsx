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
      className="border-b border-border bg-secondary/40 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading eyebrow="About" title={aboutContent.heading} />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1.4fr] md:gap-12">
          <Reveal>
            <PortraitPlaceholder
              initials="AL"
              alt={`Foto ${siteConfig.founder.name}, ${siteConfig.founder.role}`}
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5">
              {aboutContent.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-base leading-relaxed text-foreground/90"
                >
                  {p}
                </p>
              ))}
              <div className="flex items-center gap-5 pt-2 text-sm text-muted-foreground">
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
