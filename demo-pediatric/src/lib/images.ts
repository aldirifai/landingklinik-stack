// Curated Unsplash photos untuk demo Si Senyum Pediatric Dental (playful coral/mint).

const unsplash = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const photos = {
  // Anak ceria di klinik / lifestyle pediatric
  clinicInterior: unsplash("1576091160550-2173dba999ef", 1000),
  childHappy: unsplash("1610216705422-caa3fcb6d158", 800),
  family: unsplash("1622253692010-333f2da6031d", 800),
  cleanClinic: unsplash("1588776814546-1ffcf47267a5", 1000),
};

// Article hero images
export const articleImages: Record<string, string> = {
  "kapan-checkup-pertama": unsplash("1576091160550-2173dba999ef", 600),
  "beda-pediatric-vs-umum": unsplash("1606811971618-4486d14f3f99", 600),
  "tips-persiapan-visit-pertama": unsplash("1610216705422-caa3fcb6d158", 600),
};

// DiceBear avataaars (lebih playful untuk pediatric vibe)
const dicebear = (seed: string) =>
  `https://api.dicebear.com/9.x/notionists-neutral/svg?seed=${encodeURIComponent(seed)}&backgroundColor=fecdd3,a7f3d0,fcd34d&backgroundType=gradientLinear`;

export const doctorAvatars: Record<string, string> = {
  "drg. Nanda Permata, Sp.KGA": dicebear("Nanda Permata"),
  "drg. Indra Wijaya, Sp.KGA": dicebear("Indra Wijaya"),
};
