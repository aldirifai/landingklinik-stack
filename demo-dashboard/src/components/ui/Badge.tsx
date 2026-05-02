import type { InquiryStatus, BookingStatus, InquirySource } from "@/types";
import { cn } from "@/lib/cn";

const inquiryLabels: Record<InquiryStatus, string> = {
  new: "Baru",
  contacted: "Dihubungi",
  booked: "Sudah booking",
  noshow: "No-show",
  archived: "Diarsip",
};

const inquiryClasses: Record<InquiryStatus, string> = {
  new: "bg-status-newBg text-status-new",
  contacted: "bg-status-contactedBg text-status-contacted",
  booked: "bg-status-bookedBg text-status-booked",
  noshow: "bg-status-noshowBg text-status-noshow",
  archived: "bg-status-archivedBg text-status-archived",
};

const bookingLabels: Record<BookingStatus, string> = {
  confirmed: "Confirmed",
  arrived: "Arrived",
  "in-treatment": "In treatment",
  done: "Done",
  noshow: "No-show",
};

const bookingClasses: Record<BookingStatus, string> = {
  confirmed: "bg-blue-50 text-blue-700 border-blue-200",
  arrived: "bg-amber-50 text-amber-700 border-amber-200",
  "in-treatment": "bg-violet-50 text-violet-700 border-violet-200",
  done: "bg-emerald-50 text-emerald-700 border-emerald-200",
  noshow: "bg-red-50 text-red-700 border-red-200",
};

const sourceLabels: Record<InquirySource, string> = {
  wa: "WhatsApp",
  form: "Form web",
  phone: "Telepon",
};

export function StatusBadge({ status }: { status: InquiryStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        inquiryClasses[status]
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {inquiryLabels[status]}
    </span>
  );
}

export function BookingStatusBadge({ status }: { status: BookingStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium",
        bookingClasses[status]
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {bookingLabels[status]}
    </span>
  );
}

export function SourceBadge({ source }: { source: InquirySource }) {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
      {sourceLabels[source]}
    </span>
  );
}
