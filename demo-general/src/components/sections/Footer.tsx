import Link from "next/link";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { clinic, demoDisclaimer, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 text-white font-bold">
                D
              </span>
              <span className="font-display text-base font-bold text-ink">
                {clinic.name}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
              Klinik gigi keluarga di Surabaya. Pendekatan personal, harga transparan,
              buka sampai malam.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink">Quick links</h4>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink">Kontak & jam</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>{clinic.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>{clinic.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>+{clinic.whatsapp}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>{clinic.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>
                  {clinic.hours.weekday}
                  <br />
                  {clinic.hours.weekend}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {clinic.name}. Demo project.
            </p>
            <p className="sm:text-right">
              Dibuat dengan{" "}
              <a
                href="https://landingklinik.id"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-600 hover:underline"
              >
                landingklinik.id
              </a>
            </p>
          </div>
          <div className="mt-4 rounded-lg bg-slate-50 p-4 text-xs leading-relaxed text-slate-500">
            {demoDisclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
}
