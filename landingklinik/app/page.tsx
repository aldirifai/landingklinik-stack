import type { Metadata } from "next";
import Script from "next/script";

import { About } from "@/components/sections/About";
import { CaseStudyPreview } from "@/components/sections/CaseStudyPreview";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { Process } from "@/components/sections/Process";
import { Solution } from "@/components/sections/Solution";
import { buildMetadata, serviceSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "Landing page klinik gigi yang fokus ke booking, bukan brosur. Project 3 minggu, harga transparan Rp 5.500.000, hasil terukur. Untuk klinik gigi di Indonesia.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <Pricing />
      <CaseStudyPreview />
      <About />
      <FAQ />
      <FinalCTA />
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema()) }}
      />
    </>
  );
}
