export type Doctor = {
  name: string;
  specialty: string;
  education: string;
  certification: string;
  experience: string;
  bio: string;
};

export type TreatmentItem = { name: string; price: string; note?: string };
export type TreatmentCategory = { category: string; items: TreatmentItem[] };

export type Methodology = {
  icon: string;
  title: string;
  description: string;
};

export type Article = {
  slug: string;
  title: string;
  preview: string;
  readTime: string;
};

export type Usp = { icon: string; title: string; description: string };

export type Testimonial = {
  name: string;
  context: string;
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
  hours: { weekday: string; weekend: string; note: string };
  email: string;
  mapsCoordinate: { lat: number; lng: number };
};

export type PediatricBooking = {
  parentName: string;
  phone: string;
  childName: string;
  childAge: string;
  doctor: string;
  treatment: string;
  experience: string;
  specialNeeds: string;
  date: string;
};
