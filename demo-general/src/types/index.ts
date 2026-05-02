export type Doctor = {
  name: string;
  specialty: string;
  education: string;
  focus: string;
  experience: string;
  bio: string;
};

export type TreatmentItem = {
  name: string;
  price: string;
};

export type TreatmentCategory = {
  category: string;
  items: TreatmentItem[];
};

export type Usp = {
  icon: string;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
  rating: number;
};

export type Faq = {
  q: string;
  a: string;
};

export type Clinic = {
  name: string;
  tagline: string;
  yearFounded: number;
  address: string;
  phone: string;
  whatsapp: string;
  hours: {
    weekday: string;
    weekend: string;
  };
  email: string;
  mapsCoordinate: { lat: number; lng: number };
};

export type BookingPayload = {
  name: string;
  phone: string;
  treatment: string;
  doctor: string;
  date: string;
  time: string;
  notes: string;
};
