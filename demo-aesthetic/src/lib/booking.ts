import { clinic } from "@/lib/content";
import type { ConsultationBooking } from "@/types";

export function buildWhatsappMessage(payload: ConsultationBooking): string {
  const treatments =
    payload.treatments.length > 0 ? payload.treatments.join(", ") : "konsultasi umum";
  const schedule = payload.schedule || "fleksibel";
  const notes = payload.notes?.trim() ? payload.notes.trim() : "-";

  return [
    `Halo ${clinic.name}, saya ${payload.name} (WA: ${payload.phone}).`,
    `Saya tertarik untuk konsultasi treatment: ${treatments}.`,
    `Preferensi waktu: ${schedule}.`,
    `Catatan: ${notes}.`,
    "Mohon informasi slot konsultasi terdekat. Terima kasih.",
  ].join(" ");
}

export function buildWhatsappLink(message: string): string {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function openWhatsappBooking(payload: ConsultationBooking) {
  const link = buildWhatsappLink(buildWhatsappMessage(payload));
  if (typeof window !== "undefined") {
    window.open(link, "_blank", "noopener,noreferrer");
  }
}

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
