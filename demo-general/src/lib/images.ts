// Curated Unsplash photos & DiceBear avatars untuk demo Dental Care Studio.
// Semua URL sudah diverifikasi 200. Ganti easily kalau ada copyright concern.

const unsplash = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const photos = {
  clinicInterior: unsplash("1588776814546-1ffcf47267a5", 1000),
  clinicWide: unsplash("1629909613654-28e377c37b09", 1400),
  patientHappy: unsplash("1606811971618-4486d14f3f99", 800),
  warmAtmosphere: unsplash("1622253692010-333f2da6031d", 800),
};

// DiceBear notionists-neutral untuk doctor avatars — professional, abstract, tidak generic stock
const dicebear = (seed: string) =>
  `https://api.dicebear.com/9.x/notionists-neutral/svg?seed=${encodeURIComponent(seed)}&backgroundColor=bae6fd,bfdbfe,c7d2fe,fde68a&backgroundType=gradientLinear`;

export const doctorAvatars: Record<string, string> = {
  "drg. Anindya Pratiwi": dicebear("Anindya Pratiwi"),
  "drg. Bagas Hartono": dicebear("Bagas Hartono"),
  "drg. Citra Wulandari": dicebear("Citra Wulandari"),
};
