import { clinic } from "@/lib/content";
import type { BookingPayload } from "@/types";

export function buildWhatsappMessage(payload: BookingPayload): string {
  const treatment = payload.treatment || "konsultasi umum";
  const doctor = payload.doctor || "tidak ada preferensi";
  const date = payload.date || "secepatnya";
  const time = payload.time || "fleksibel";
  const notes = payload.notes?.trim() ? payload.notes.trim() : "-";

  return [
    `Halo ${clinic.name}, saya ${payload.name} (HP: ${payload.phone})`,
    `mau booking ${treatment} dengan ${doctor} pada ${date} ${time}.`,
    `Catatan: ${notes}.`,
    "Terima kasih.",
  ].join(" ");
}

export function buildWhatsappLink(message: string): string {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function openWhatsappBooking(payload: BookingPayload) {
  const link = buildWhatsappLink(buildWhatsappMessage(payload));
  if (typeof window !== "undefined") {
    window.open(link, "_blank", "noopener,noreferrer");
  }
}
