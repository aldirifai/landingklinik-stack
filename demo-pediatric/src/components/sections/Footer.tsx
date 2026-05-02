import Link from "next/link";
import { MapPin, Phone, MessageCircle, Mail, Smile } from "lucide-react";
import { clinic, demoDisclaimer, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t-2 border-coral-100 bg-white">
      <div className="container-page py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-2xl bg-coral-400 text-white">
                <Smile className="h-5 w-5" />
              </span>
              <span className="font-display text-base font-extrabold text-ink">
                Si Senyum Pediatric Dental
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
              Klinik gigi khusus anak di Surabaya Barat. Spesialis Sp.KGA,
              pendekatan psychology-based, weekend full operation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-extrabold text-ink">Quick links</h4>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-coral-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold text-ink">Kontak</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral-400" />
                <span>{clinic.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-coral-400" />
                <span>{clinic.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-coral-400" />
                <span>+{clinic.whatsapp}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-coral-400" />
                <span>{clinic.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-coral-100 pt-6">
          <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {clinic.name}. Demo project.</p>
            <p className="sm:text-right">
              Dibuat dengan{" "}
              <a
                href="https://landingklinik.id"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-coral-600 hover:underline"
              >
                landingklinik.id
              </a>
            </p>
          </div>
          <div className="mt-4 rounded-2xl bg-coral-50/60 p-4 text-xs leading-relaxed text-slate-600">
            {demoDisclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
}
