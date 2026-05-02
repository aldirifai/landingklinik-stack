import type { Metadata } from "next";
import { Quicksand, Nunito } from "next/font/google";
import "./globals.css";
import { clinic } from "@/lib/content";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${clinic.name} — ${clinic.tagline}`,
  description:
    "Klinik gigi khusus anak di Surabaya Barat. Dokter spesialis Sp.KGA, pendekatan psychology-based, weekend full operation.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://demo-pediatric.landingklinik.id"
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
    <html lang="id" className={`${nunito.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
