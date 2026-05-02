"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

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
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container className="flex h-16 items-center justify-between gap-3">
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
          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Navigasi mobile"
          className="border-t border-border bg-background md:hidden"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[44px] items-center text-base font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
