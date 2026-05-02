export type InquiryStatus = "new" | "contacted" | "booked" | "noshow" | "archived";
export type InquirySource = "wa" | "form" | "phone";

export type Inquiry = {
  id: string;
  patientName: string;
  phone: string;
  treatment: string;
  doctor: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  source: InquirySource;
  status: InquiryStatus;
  createdAt: string;
};

export type BookingStatus = "confirmed" | "arrived" | "in-treatment" | "done" | "noshow";

export type Booking = {
  id: string;
  patientName: string;
  treatment: string;
  doctor: string;
  startTime: string;
  durationMin: number;
  status: BookingStatus;
};

export type Patient = {
  id: string;
  name: string;
  phone: string;
  lastVisit: string;
  totalVisits: number;
  lastTreatment: string;
  totalSpent: number;
};
