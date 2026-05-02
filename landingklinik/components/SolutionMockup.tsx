import { CalendarCheck, MapPin, MessageSquare, Stethoscope } from "lucide-react";
import { BrowserMockup } from "./BrowserMockup";

export function SolutionMockup() {
  return (
    <BrowserMockup className="mx-auto max-w-3xl" url="klinikgigi-anda.id">
      <div className="space-y-5 p-5 sm:p-6">
        <section className="rounded-md border border-border bg-secondary/40 p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="h-2.5 w-32 rounded bg-foreground/85" />
              <div className="h-2 w-44 rounded bg-muted-foreground/40" />
              <div className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1.5 text-[10px] font-medium text-primary-foreground">
                <CalendarCheck className="h-2.5 w-2.5" />
                Booking via WhatsApp
              </div>
            </div>
            <div className="hidden h-16 w-24 rounded-md bg-gradient-to-br from-primary/20 to-accent/20 sm:block" />
          </div>
        </section>

        <section>
          <div className="mb-2 h-2 w-24 rounded bg-foreground/70" />
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-md border border-border p-2.5"
              >
                <Stethoscope className="mb-1.5 h-3.5 w-3.5 text-primary" />
                <div className="h-1.5 w-3/4 rounded bg-foreground/70" />
                <div className="mt-1 h-1.5 w-1/2 rounded bg-muted-foreground/30" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-2 h-2 w-28 rounded bg-foreground/70" />
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-md border border-border p-2.5"
              >
                <div className="mb-2 h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30" />
                <div className="h-1.5 w-3/4 rounded bg-foreground/70" />
                <div className="mt-1 h-1.5 w-1/2 rounded bg-muted-foreground/30" />
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-md border border-border p-3">
            <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-foreground">
              <MapPin className="h-3 w-3 text-primary" />
              Lokasi klinik
            </div>
            <div className="h-16 w-full rounded bg-gradient-to-br from-sky-100 to-emerald-100" />
          </div>
          <div className="rounded-md border border-border p-3">
            <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-foreground">
              <MessageSquare className="h-3 w-3 text-primary" />
              Jadwal praktek
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>Senin–Jumat</span>
                <span>09:00 – 21:00</span>
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>Sabtu</span>
                <span>09:00 – 17:00</span>
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>Minggu</span>
                <span>Tutup</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BrowserMockup>
  );
}
