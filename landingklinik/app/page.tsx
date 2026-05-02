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
import { faqContent } from "@/content/main";
import { buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `Jasa Pembuatan Landing Page Klinik Gigi — ${siteConfig.name}`,
  description:
    "Jasa landing page klinik gigi fokus booking pasien: integrasi WhatsApp, Google Business Profile, dan dashboard inquiry. Selesai 3 minggu, Rp 5,5 juta sekali bayar.",
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqContent.items)),
        }}
      />
    </>
  );
}
