import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { clinic } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${clinic.name} — ${clinic.tagline}`,
  description:
    "Klinik gigi keluarga di Surabaya. Pendekatan personal, harga transparan, buka sampai jam 8 malam.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://demo-general.landingklinik.id"
  ),
  openGraph: {
    title: clinic.name,
    description: clinic.tagline,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
