"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FieldWrapper, Input, Select, Textarea } from "@/components/ui/Input";
import {
  clinic,
  doctors,
  previousExperience,
  treatmentReasons,
} from "@/lib/content";
import { openWhatsappBooking } from "@/lib/booking";

type Errors = Partial<
  Record<"parentName" | "phone" | "childName" | "childAge" | "treatment" | "experience" | "date", string>
>;

export function Booking() {
  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    childName: "",
    childAge: "",
    doctor: "Tidak ada preferensi",
    treatment: "",
    experience: "",
    specialNeeds: "",
    date: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((p) => ({ ...p, [key]: value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!form.parentName.trim()) next.parentName = "Nama orangtua wajib diisi";
    if (!form.phone.trim()) next.phone = "Nomor WhatsApp wajib diisi";
    if (!form.childName.trim()) next.childName = "Nama anak wajib diisi";
    if (!form.childAge.trim()) next.childAge = "Usia anak wajib diisi";
    if (!form.treatment) next.treatment = "Pilih tujuan visit";
    if (!form.experience) next.experience = "Pilih salah satu";
    if (!form.date) next.date = "Pilih tanggal preferensi";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    openWhatsappBooking(form);
  };

  return (
    <section id="booking" className="section bg-coral-50/60">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.3fr] lg:gap-14">
          <div>
            <span className="eyebrow">Booking</span>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
              Booking visit pertama si kecil
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Form ini akan membuka WhatsApp dengan template terisi otomatis.
              Tim kami akan konfirmasi slot dan menyiapkan welcome pack untuk
              anak Anda.
            </p>

            <div className="mt-8 rounded-3xl border-2 border-mint-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-mint-600">
                Welcome pack
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Setiap pasien baru dapat: name tag custom, sticker book,
                certificate &ldquo;Brave Patient&rdquo;, dan small toy setelah visit
                pertama sukses.
              </p>
            </div>

            <div className="mt-4 rounded-3xl border-2 border-coral-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-coral-600">
                Jam operasional
              </p>
              <p className="mt-2 text-sm text-slate-700">{clinic.hours.weekday}</p>
              <p className="text-sm text-slate-700">{clinic.hours.weekend}</p>
              <p className="mt-2 text-xs italic text-slate-500">
                {clinic.hours.note}
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border-2 border-coral-200 bg-white p-6 shadow-soft sm:p-8"
            noValidate
          >
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Data orangtua
            </p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <FieldWrapper label="Nama orangtua" htmlFor="parentName" required error={errors.parentName}>
                <Input
                  id="parentName"
                  value={form.parentName}
                  onChange={(e) => update("parentName", e.target.value)}
                  placeholder="Nama lengkap"
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
                />
              </FieldWrapper>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-slate-500">
              Data anak
            </p>
            <div className="mt-3 grid gap-4 sm:grid-cols-[2fr,1fr]">
              <FieldWrapper label="Nama anak" htmlFor="childName" required error={errors.childName}>
                <Input
                  id="childName"
                  value={form.childName}
                  onChange={(e) => update("childName", e.target.value)}
                  placeholder="Nama panggilan juga boleh"
                />
              </FieldWrapper>
              <FieldWrapper label="Usia (tahun)" htmlFor="childAge" required error={errors.childAge}>
                <Input
                  id="childAge"
                  type="number"
                  min={0}
                  max={17}
                  value={form.childAge}
                  onChange={(e) => update("childAge", e.target.value)}
                  placeholder="Mis. 5"
                />
              </FieldWrapper>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <FieldWrapper label="Pilihan dokter" htmlFor="doctor">
                <Select
                  id="doctor"
                  value={form.doctor}
                  onChange={(e) => update("doctor", e.target.value)}
                >
                  <option>Tidak ada preferensi</option>
                  {doctors.map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </Select>
              </FieldWrapper>
              <FieldWrapper label="Tanggal preferensi" htmlFor="date" required error={errors.date}>
                <Input
                  id="date"
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  min={new Date().toISOString().slice(0, 10)}
                />
              </FieldWrapper>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <FieldWrapper label="Tujuan visit" htmlFor="treatment" required error={errors.treatment}>
                <Select
                  id="treatment"
                  value={form.treatment}
                  onChange={(e) => update("treatment", e.target.value)}
                >
                  <option value="">Pilih tujuan</option>
                  {treatmentReasons.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </Select>
              </FieldWrapper>
              <FieldWrapper
                label="Pengalaman ke dokter gigi"
                htmlFor="experience"
                required
                error={errors.experience}
              >
                <Select
                  id="experience"
                  value={form.experience}
                  onChange={(e) => update("experience", e.target.value)}
                >
                  <option value="">Pilih</option>
                  {previousExperience.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </Select>
              </FieldWrapper>
            </div>

            <div className="mt-4">
              <FieldWrapper
                label="Special needs"
                htmlFor="specialNeeds"
                hint="Opsional. Misal: autism, ADHD, sensory sensitivity, atau kondisi lain yang perlu kami pertimbangkan."
              >
                <Textarea
                  id="specialNeeds"
                  value={form.specialNeeds}
                  onChange={(e) => update("specialNeeds", e.target.value)}
                  placeholder="Tulis catatan untuk dokter..."
                />
              </FieldWrapper>
            </div>

            <Button type="submit" size="lg" className="mt-7 w-full">
              <MessageCircle className="h-5 w-5" />
              Kirim via WhatsApp
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
