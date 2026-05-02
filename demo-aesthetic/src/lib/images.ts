// Curated Unsplash photos untuk demo Smile Aesthetic Dental (premium navy/gold vibe).

const unsplash = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const photos = {
  heroBg: unsplash("1629909613654-28e377c37b09", 2000, 75),
  clinicInterior: unsplash("1559757175-5700dde675bc", 1000),
  clinicAesthetic: unsplash("1606811971618-4486d14f3f99", 1000),
};

// 8 photos untuk gallery before/after — mix smile/teeth/treatment shots
export const galleryPhotos: Array<{ before: string; after: string }> = [
  {
    before: unsplash("1450297350677-623de575f31c", 600),
    after: unsplash("1606265752439-1f18756aa5fc", 600),
  },
  {
    before: unsplash("1612531385446-f7e6d131e1d0", 600),
    after: unsplash("1581594693702-fbdc51b2763b", 600),
  },
  {
    before: unsplash("1622253692010-333f2da6031d", 600),
    after: unsplash("1581594549595-35f6edc7b762", 600),
  },
  {
    before: unsplash("1559329007-40df8a9345d8", 600),
    after: unsplash("1616391182219-e080b4d1043a", 600),
  },
  {
    before: unsplash("1590650153855-d9e808231d41", 600),
    after: unsplash("1450297350677-623de575f31c", 600),
  },
  {
    before: unsplash("1607619056574-7b8d3ee536b2", 600),
    after: unsplash("1612531385446-f7e6d131e1d0", 600),
  },
  {
    before: unsplash("1606265752439-1f18756aa5fc", 600),
    after: unsplash("1581594693702-fbdc51b2763b", 600),
  },
  {
    before: unsplash("1581594549595-35f6edc7b762", 600),
    after: unsplash("1606811971618-4486d14f3f99", 600),
  },
];

// DiceBear personas untuk doctor — slightly more refined for premium feel
const dicebear = (seed: string) =>
  `https://api.dicebear.com/9.x/notionists-neutral/svg?seed=${encodeURIComponent(seed)}&backgroundColor=1e3a8a,11205b&backgroundType=gradientLinear&backgroundRotation=45`;

export const doctorAvatars: Record<string, string> = {
  "drg. Reza Mahendra, Sp.KG": dicebear("Reza Mahendra"),
  "drg. Maya Anggraini, Sp.Ort": dicebear("Maya Anggraini"),
};
