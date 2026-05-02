import { CalendarCheck, MapPin, Star } from "lucide-react";
import { BrowserMockup } from "./BrowserMockup";

export function HeroMockup() {
  return (
    <BrowserMockup className="w-full" url="klinikgigi-anda.id">
      <div className="space-y-3 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-primary" />
            <div className="h-2.5 w-20 rounded bg-foreground/80" />
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-10 rounded bg-muted-foreground/30" />
            <div className="h-2 w-10 rounded bg-muted-foreground/30" />
            <div className="h-2 w-10 rounded bg-muted-foreground/30" />
          </div>
        </div>
        <div className="space-y-2 pt-2">
          <div className="h-3 w-3/4 rounded bg-foreground/85" />
          <div className="h-3 w-2/3 rounded bg-foreground/85" />
          <div className="h-2.5 w-5/6 rounded bg-muted-foreground/40" />
          <div className="h-2.5 w-3/5 rounded bg-muted-foreground/40" />
        </div>
        <div className="flex gap-2 pt-1">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-[11px] font-medium text-primary-foreground">
            <CalendarCheck className="h-3 w-3" /> Booking sekarang
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-[11px] font-medium text-foreground">
            <MapPin className="h-3 w-3" /> Lihat lokasi
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-3">
          <div className="rounded-md border border-border p-2.5">
            <div className="mb-1.5 flex items-center gap-1 text-[10px] text-muted-foreground">
              <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
              4.9
            </div>
            <div className="h-1.5 w-full rounded bg-muted-foreground/30" />
          </div>
          <div className="rounded-md border border-border p-2.5">
            <div className="h-1.5 w-2/3 rounded bg-muted-foreground/40" />
            <div className="mt-1.5 h-1.5 w-1/2 rounded bg-muted-foreground/30" />
          </div>
          <div className="rounded-md border border-border p-2.5">
            <div className="h-1.5 w-2/3 rounded bg-muted-foreground/40" />
            <div className="mt-1.5 h-1.5 w-1/2 rounded bg-muted-foreground/30" />
          </div>
        </div>
      </div>
    </BrowserMockup>
  );
}
