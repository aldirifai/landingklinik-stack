export const siteConfig = {
  name: "landingklinik.id",
  domain: "landingklinik.id",
  url: "https://landingklinik.id",
  tagline: "Landing page khusus klinik gigi",
  description:
    "Spesialis landing page dan sistem booking untuk klinik gigi di Indonesia. Project 3 minggu, harga transparan, hasil terukur.",
  email: "hello@landingklinik.id",
  whatsapp: {
    raw: "6289678386070",
    display: "+62 896-7838-6070",
  },
  location: "Surabaya, Indonesia",
  founder: {
    name: "Aldi",
    role: "Full-stack developer",
    base: "Surabaya, Indonesia",
  },
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
  },
  defaultOgImage: "/og-default.png",
};

export type SiteConfig = typeof siteConfig;
