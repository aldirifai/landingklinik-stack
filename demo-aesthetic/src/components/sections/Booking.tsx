"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FieldWrapper, Input, Select, Textarea } from "@/components/ui/Input";
import { clinic, consultationSchedule, showcase } from "@/lib/content";
import { openWhatsappBooking } from "@/lib/booking";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<"name" | "phone" | "schedule", string>>;

export function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatments: [] as string[],
    schedule: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const toggleTreatment = (id: string) => {
    setForm((prev) => ({
      ...prev,
      treatments: prev.treatments.includes(id)
        ? prev.treatments.filter((t) => t !== id)
        : [...prev.treatments, id],
    }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Nama wajib diisi";
    if (!form.phone.trim()) next.phone = "Nomor WhatsApp wajib diisi";
    if (!form.schedule) next.schedule = "Pilih preferensi waktu";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    openWhatsappBooking(form);
  };

  return (
    <section id="booking" className="section bg-navy-900 text-white">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[1fr,1.2fr] lg:gap-20">
          <div>
            <span className="eyebrow text-gold-400">Mulai journey</span>
            <h2 className="display-h2 mt-3 text-white">
              Mulai smile journey Anda
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
              Konsultasi pertama gratis, tanpa komitmen. Tim concierge akan
              menyesuaikan jadwal dengan kalendar Anda.
            </p>

            <div className="mt-10 space-y-3 rounded-md border border-white/10 bg-white/5 p-6">
              <p className="text-[10px] uppercase tracking-widest text-gold-400">
                Atau telepon langsung
              </p>
              <a
                href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 font-display text-2xl text-white hover:text-gold-400"
              >
                <Phone className="h-5 w-5" />
                {clinic.phone}
              </a>
              <p className="text-sm text-white/60">{clinic.hours.weekday}</p>
              <p className="text-sm text-white/60">{clinic.hours.weekend}</p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-md border border-white/10 bg-white p-7 text-ink shadow-refined sm:p-9"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <FieldWrapper label="Nama lengkap" htmlFor="name" required error={errors.name}>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Nama Anda"
                />
              </FieldWrapper>
              <FieldWrapper label="Nomor WhatsApp" htmlFor="phone" required error={errors.phone}>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  placeholder="08xxxxxxxxxx"
                />
              </FieldWrapper>
            </div>

            <div className="mt-5">
              <span className="block text-xs font-medium uppercase tracking-wider text-navy-700">
                Treatment of interest
              </span>
              <p className="mt-1 text-xs text-navy-400">
                Pilih satu atau lebih (opsional)
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {showcase.map((s) => {
                  const active = form.treatments.includes(s.name);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleTreatment(s.name)}
                      className={cn(
                        "rounded-full border px-3.5 py-1.5 text-xs font-medium transition",
                        active
                          ? "border-gold-500 bg-gold-50 text-gold-700"
                          : "border-navy-200 text-navy-700 hover:border-navy-500"
                      )}
                    >
                      {s.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5">
              <FieldWrapper
                label="Preferensi waktu konsultasi"
                htmlFor="schedule"
                required
                error={errors.schedule}
              >
                <Select
                  id="schedule"
                  value={form.schedule}
                  onChange={(e) => setForm((p) => ({ ...p, schedule: e.target.value }))}
                >
                  <option value="">Pilih waktu</option>
                  {consultationSchedule.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </Select>
              </FieldWrapper>
            </div>

            <div className="mt-5">
              <FieldWrapper label="Catatan" htmlFor="notes" hint="Opsional. Mention concerns spesifik atau tujuan estetika.">
                <Textarea
                  id="notes"
                  value={form.notes}
                  onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
                  placeholder="Misal: tertarik smile makeover untuk acara wedding 8 bulan lagi..."
                />
              </FieldWrapper>
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-7 w-full bg-gold-500 text-navy-900 hover:bg-gold-600"
            >
              <MessageCircle className="h-5 w-5" />
              Kirim via WhatsApp
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="mt-3 text-center text-xs text-navy-500">
              Konsultasi pertama gratis. Concierge merespons dalam 1 jam jam operasional.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
