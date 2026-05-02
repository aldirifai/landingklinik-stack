import { clinic } from "@/lib/content";
import type { PediatricBooking } from "@/types";

export function buildWhatsappMessage(payload: PediatricBooking): string {
  const date = payload.date || "secepatnya";
  const treatment = payload.treatment || "konsultasi umum";
  const doctor = payload.doctor || "tidak ada preferensi";
  const exp = payload.experience || "belum diisi";
  const sn = payload.specialNeeds?.trim() ? payload.specialNeeds.trim() : "tidak ada";

  return [
    `Halo ${clinic.name}, saya ${payload.parentName} (WA: ${payload.phone})`,
    `mau booking ${payload.childName} (usia ${payload.childAge} tahun) untuk ${treatment} dengan ${doctor} pada ${date}.`,
    `Pengalaman ke dokter gigi sebelumnya: ${exp}.`,
    `Special needs: ${sn}.`,
    "Terima kasih.",
  ].join(" ");
}

export function buildWhatsappLink(message: string): string {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function openWhatsappBooking(payload: PediatricBooking) {
  const link = buildWhatsappLink(buildWhatsappMessage(payload));
  if (typeof window !== "undefined") {
    window.open(link, "_blank", "noopener,noreferrer");
  }
}
