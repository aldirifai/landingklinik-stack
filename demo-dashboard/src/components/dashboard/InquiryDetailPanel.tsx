"use client";

import { useState } from "react";
import {
  X,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  User,
  Stethoscope,
  CheckCircle2,
  CalendarCheck,
  AlertCircle,
  Archive,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Input";
import { StatusBadge, SourceBadge } from "@/components/ui/Badge";
import { relativeTime } from "@/lib/format";
import type { Inquiry, InquiryStatus } from "@/types";

type Props = {
  inquiry: Inquiry;
  onClose: () => void;
  onUpdateStatus: (status: InquiryStatus) => void;
};

export function InquiryDetailPanel({ inquiry, onClose, onUpdateStatus }: Props) {
  const [internalNote, setInternalNote] = useState("");

  const actions: Array<{
    status: InquiryStatus;
    label: string;
    icon: typeof CheckCircle2;
    variant?: "primary" | "secondary" | "danger";
  }> = [
    { status: "contacted", label: "Mark as Contacted", icon: CheckCircle2 },
    { status: "booked", label: "Mark as Booked", icon: CalendarCheck, variant: "primary" },
    { status: "noshow", label: "Mark as No-show", icon: AlertCircle, variant: "danger" },
    { status: "archived", label: "Archive", icon: Archive },
  ];

  return (
    <aside className="flex w-full max-w-md shrink-0 flex-col border-l border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5">
        <h3 className="text-sm font-medium text-gray-900">Detail inquiry</h3>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close panel"
          className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-lg font-semibold text-gray-900">{inquiry.patientName}</p>
            <p className="text-xs text-gray-500">
              {inquiry.id} • Masuk {relativeTime(inquiry.createdAt)}
            </p>
          </div>
          <StatusBadge status={inquiry.status} />
        </div>

        <div className="mt-3 flex gap-2">
          <a
            href={`tel:${inquiry.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 px-2.5 py-1 text-xs text-gray-700 hover:bg-canvas"
          >
            <Phone className="h-3 w-3" />
            {inquiry.phone}
          </a>
          <a
            href={`https://wa.me/62${inquiry.phone.replace(/^0/, "").replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700 hover:bg-emerald-100"
          >
            <MessageCircle className="h-3 w-3" />
            WhatsApp
          </a>
        </div>

        <div className="mt-6 space-y-1 rounded-md border border-gray-200 bg-canvas p-4">
          <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">Detail booking</p>
          <Detail icon={<Stethoscope className="h-3.5 w-3.5" />} label="Treatment" value={inquiry.treatment} />
          <Detail icon={<User className="h-3.5 w-3.5" />} label="Dokter" value={inquiry.doctor} />
          <Detail icon={<Calendar className="h-3.5 w-3.5" />} label="Tanggal preferensi" value={inquiry.preferredDate} />
          <Detail icon={<Clock className="h-3.5 w-3.5" />} label="Waktu preferensi" value={inquiry.preferredTime} />
        </div>

        <div className="mt-4 space-y-1 rounded-md border border-gray-200 p-4">
          <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">Sumber</p>
          <SourceBadge source={inquiry.source} />
        </div>

        <div className="mt-4 rounded-md border border-gray-200 p-4">
          <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
            Catatan dari pasien
          </p>
          <p className="mt-2 text-sm text-gray-700">{inquiry.notes || "-"}</p>
        </div>

        <div className="mt-4 rounded-md border border-gray-200 p-4">
          <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
            History komunikasi
          </p>
          <p className="mt-2 text-xs text-gray-400 italic">
            Belum ada history. Action ke pasien akan muncul di sini setelah dilakukan.
          </p>
        </div>

        <div className="mt-4 rounded-md border border-gray-200 p-4">
          <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
            Catatan internal
          </p>
          <Textarea
            value={internalNote}
            onChange={(e) => setInternalNote(e.target.value)}
            placeholder="Tambahkan catatan untuk tim resepsionis..."
            className="mt-2"
          />
        </div>
      </div>

      <div className="space-y-2 border-t border-gray-200 bg-canvas px-5 py-4">
        {actions.map(({ status, label, icon: Icon, variant }) => (
          <Button
            key={status}
            type="button"
            variant={variant ?? "secondary"}
            size="sm"
            onClick={() => onUpdateStatus(status)}
            disabled={inquiry.status === status}
            className="w-full justify-start"
          >
            <Icon className="h-4 w-4" />
            {label}
            {inquiry.status === status && <span className="ml-auto text-[10px]">aktif</span>}
          </Button>
        ))}
      </div>
    </aside>
  );
}

function Detail({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2 py-1">
      <span className="mt-0.5 text-gray-400">{icon}</span>
      <div className="flex-1 text-xs">
        <span className="text-gray-500">{label}: </span>
        <span className="font-medium text-gray-900">{value}</span>
      </div>
    </div>
  );
}
