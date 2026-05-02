import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { waLink, waMessages } from "@/lib/whatsapp";

const NAV = [
  { href: "/#solusi", label: "Solusi" },
  { href: "/#proses", label: "Proses" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a
              href={waLink(waMessages.defaultInquiry)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Diskusi via WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="sm" className="sm:hidden" variant="default">
            <a
              href={waLink(waMessages.defaultInquiry)}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </Container>
    </header>
  );
}
