import { siteConfig } from "./site";

export function waLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp.raw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  defaultInquiry:
    "Halo, saya tertarik diskusi tentang landing page klinik",
  pricingInquiry:
    "Halo, saya mau tanya detail paket Klinik Online Starter Pack",
  caseStudyFollowUp: (clinicName: string) =>
    `Halo, saya baru baca case study ${clinicName}. Mau diskusi untuk klinik saya`,
};
