"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { clinic, navLinks } from "@/lib/content";
import { buildWhatsappLink, buildWhatsappMessage } from "@/lib/booking";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = buildWhatsappLink(
    buildWhatsappMessage({
      name: "",
      phone: "",
      treatments: [],
      schedule: "",
      notes: "",
    })
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-navy-100 bg-white/95 backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-navy-500 font-display text-base font-bold text-gold-400">
            S
          </span>
          <span
            className={cn(
              "font-display text-lg tracking-tight transition",
              scrolled ? "text-ink" : "text-white"
            )}
          >
            {clinic.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition",
                scrolled
                  ? "text-navy-700 hover:text-gold-600"
                  : "text-white/80 hover:text-gold-400"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton
            href={waLink}
            external
            size="sm"
            variant={scrolled ? "primary" : "outline-light"}
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </LinkButton>
        </div>

        <button
          type="button"
          className={cn("md:hidden", scrolled ? "text-ink" : "text-white")}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white md:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-navy-700 hover:bg-navy-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-navy-500 px-4 text-sm font-medium text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
