"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FieldWrapper, Input, Select, Textarea } from "@/components/ui/Input";
import { clinic, doctors, timeSlots, treatments } from "@/lib/content";
import { openWhatsappBooking } from "@/lib/booking";

type Errors = Partial<Record<"name" | "phone" | "treatment" | "date" | "time", string>>;

export function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    doctor: "Tidak ada preferensi",
    date: "",
    time: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Nama wajib diisi";
    if (!form.phone.trim()) next.phone = "Nomor HP wajib diisi";
    if (!form.treatment) next.treatment = "Pilih treatment";
    if (!form.date) next.date = "Pilih tanggal preferensi";
    if (!form.time) next.time = "Pilih waktu preferensi";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    openWhatsappBooking(form);
  };

  return (
    <section id="booking" className="section bg-gradient-to-b from-canvas to-brand-50/40">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr] lg:gap-16">
          <div>
            <span className="eyebrow">Booking</span>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Siap untuk checkup?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Isi form di samping, kami terima booking-nya langsung lewat WhatsApp.
              Tim resepsionis akan konfirmasi slot dalam 1 jam jam operasional.
            </p>

            <ul className="mt-8 space-y-4 rounded-lg border border-slate-200 bg-white p-6">
              <ContactRow icon={<MapPin className="h-5 w-5 text-brand-600" />} label="Alamat" value={clinic.address} />
              <ContactRow icon={<Clock className="h-5 w-5 text-brand-600" />} label="Jam operasional" value={`${clinic.hours.weekday} • ${clinic.hours.weekend}`} />
              <ContactRow icon={<Phone className="h-5 w-5 text-brand-600" />} label="Telepon" value={clinic.phone} />
              <ContactRow icon={<MessageCircle className="h-5 w-5 text-brand-600" />} label="WhatsApp" value={`+${clinic.whatsapp}`} />
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-card sm:p-8"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <FieldWrapper label="Nama lengkap" htmlFor="name" required error={errors.name}>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Nama Anda"
                  autoComplete="name"
                />
              </FieldWrapper>
              <FieldWrapper label="Nomor WhatsApp" htmlFor="phone" required error={errors.phone}>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  autoComplete="tel"
                />
              </FieldWrapper>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <FieldWrapper label="Treatment" htmlFor="treatment" required error={errors.treatment}>
                <Select
                  id="treatment"
                  value={form.treatment}
                  onChange={(e) => update("treatment", e.target.value)}
                >
                  <option value="">Pilih treatment</option>
                  {treatments.map((cat) => (
                    <optgroup key={cat.category} label={cat.category}>
                      {cat.items.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </Select>
              </FieldWrapper>
              <FieldWrapper label="Pilihan dokter" htmlFor="doctor">
                <Select
                  id="doctor"
                  value={form.doctor}
                  onChange={(e) => update("doctor", e.target.value)}
                >
                  <option>Tidak ada preferensi</option>
                  {doctors.map((doc) => (
                    <option key={doc.name} value={doc.name}>
                      {doc.name}
                    </option>
                  ))}
                </Select>
              </FieldWrapper>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <FieldWrapper label="Tanggal preferensi" htmlFor="date" required error={errors.date}>
                <Input
                  id="date"
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  min={new Date().toISOString().slice(0, 10)}
                />
              </FieldWrapper>
              <FieldWrapper label="Waktu preferensi" htmlFor="time" required error={errors.time}>
                <Select
                  id="time"
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                >
                  <option value="">Pilih waktu</option>
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </Select>
              </FieldWrapper>
            </div>

            <div className="mt-4">
              <FieldWrapper
                label="Catatan khusus"
                htmlFor="notes"
                hint="Opsional. Misal: gigi belakang sakit saat dingin, pernah trauma anestesi, dll."
              >
                <Textarea
                  id="notes"
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Tulis catatan untuk dokter..."
                />
              </FieldWrapper>
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full">
              <MessageCircle className="h-5 w-5" />
              Kirim via WhatsApp
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="mt-3 text-center text-xs text-slate-500">
              Form ini akan membuka WhatsApp dengan template pesan terisi otomatis.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-wider text-slate-400">{label}</p>
        <p className="text-sm text-ink">{value}</p>
      </div>
    </li>
  );
}
