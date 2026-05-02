export type Doctor = {
  name: string;
  title: string;
  credentials: string[];
  experience: string;
  bio: string;
  certifications: string[];
};

export type TreatmentItem = {
  name: string;
  price: string;
  note?: string;
};

export type TreatmentCategory = {
  category: string;
  items: TreatmentItem[];
};

export type ShowcaseTreatment = {
  id: string;
  name: string;
  description: string;
  highlight: string;
};

export type Usp = {
  icon: string;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type Faq = { q: string; a: string };

export type Clinic = {
  name: string;
  tagline: string;
  yearFounded: number;
  address: string;
  phone: string;
  whatsapp: string;
  hours: { weekday: string; weekend: string };
  email: string;
  mapsCoordinate: { lat: number; lng: number };
};

export type EstimatorOption = {
  id: string;
  label: string;
  unitLow: number;
  unitHigh: number;
  unit: "gigi" | "paket" | "set";
  defaultQty: number;
  maxQty: number;
};

export type ProcessStep = {
  number: string;
  title: string;
  duration: string;
  description: string;
};

export type GalleryItem = {
  caption: string;
  treatment: string;
};

export type ConsultationBooking = {
  name: string;
  phone: string;
  treatments: string[];
  schedule: string;
  notes: string;
};
