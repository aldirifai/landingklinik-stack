import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { clinic } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${clinic.name} — ${clinic.tagline}`,
  description:
    "Premium aesthetic dentistry di Surabaya Barat. Veneer, Invisalign, smile design oleh spesialis dengan training internasional.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://demo-aesthetic.landingklinik.id"
  ),
  openGraph: {
    title: clinic.name,
    description: clinic.tagline,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
