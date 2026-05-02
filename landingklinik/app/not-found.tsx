import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/seo";
import { waLink, waMessages } from "@/lib/whatsapp";

export const metadata: Metadata = buildMetadata({
  title: "Halaman tidak ditemukan",
  description: "Halaman yang Anda cari tidak ditemukan.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32">
      <Container size="md">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-6xl font-bold text-primary sm:text-7xl lg:text-8xl">
            404
          </p>
          <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Halaman tidak ditemukan
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sepertinya halaman yang Anda cari sudah dipindah, dihapus, atau memang belum pernah ada. Coba kembali ke beranda atau diskusi langsung dengan saya via WhatsApp.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke beranda
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={waLink(waMessages.defaultInquiry)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Diskusi via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
