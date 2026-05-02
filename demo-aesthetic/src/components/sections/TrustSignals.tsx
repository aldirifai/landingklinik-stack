import { Award } from "lucide-react";
import { trustSignals } from "@/lib/content";

export function TrustSignals() {
  return (
    <section id="trust" className="border-y border-navy-100 bg-white py-10">
      <div className="container-page">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-navy-400">
          Akreditasi & sertifikasi internasional
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {trustSignals.map((sig) => (
            <li
              key={sig.name}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold-500/40 text-gold-600">
                <Award className="h-4 w-4" />
              </span>
              <span className="font-display text-base text-navy-700">{sig.name}</span>
              <span className="text-[11px] uppercase tracking-wider text-navy-400">
                {sig.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
