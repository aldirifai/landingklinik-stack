"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, Smile } from "lucide-react";
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
      parentName: "",
      phone: "",
      childName: "",
      childAge: "",
      doctor: "",
      treatment: "konsultasi",
      experience: "",
      specialNeeds: "",
      date: "",
    })
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "bg-white/95 backdrop-blur shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-coral-400 text-white">
            <Smile className="h-5 w-5" />
          </span>
          <span className="font-display text-base font-extrabold text-ink">
            Si Senyum
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-slate-700 transition hover:text-coral-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton href={waLink} external size="sm">
            <MessageCircle className="h-4 w-4" />
            Booking via WA
          </LinkButton>
        </div>

        <button
          type="button"
          className="md:hidden text-ink"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-coral-100 bg-white md:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-coral-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-coral-400 px-5 text-sm font-bold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Booking via WA
            </a>
          </nav>
        </div>
      )}
      {clinic.name ? null : null}
    </header>
  );
}
