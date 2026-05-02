import Link from "next/link";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { clinic, demoDisclaimer, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-page py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gold-500 font-display text-base font-bold text-navy-900">
                S
              </span>
              <span className="font-display text-xl">{clinic.name}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
              Premium aesthetic dentistry di Surabaya Barat. Smile design
              dengan presisi spesialis dan material internasional.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-gold-400">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-gold-400">
              Kontak
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{clinic.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{clinic.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>+{clinic.whatsapp}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{clinic.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {clinic.name}. Demo project.
            </p>
            <p className="sm:text-right">
              Dibuat dengan{" "}
              <a
                href="https://landingklinik.id"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold-400 hover:underline"
              >
                landingklinik.id
              </a>
            </p>
          </div>
          <div className="mt-5 rounded-md border border-white/10 bg-white/5 p-5 text-xs leading-relaxed text-white/55">
            {demoDisclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
}
