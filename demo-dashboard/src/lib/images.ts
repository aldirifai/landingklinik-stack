// DiceBear avatar untuk dashboard (resepsionis profile)
const dicebear = (seed: string) =>
  `https://api.dicebear.com/9.x/notionists-neutral/svg?seed=${encodeURIComponent(seed)}&backgroundColor=dbeafe,bfdbfe&backgroundType=gradientLinear`;

export const userAvatar = dicebear("Anindya Pratiwi Receptionist");

export function patientAvatar(name: string): string {
  return dicebear(name);
}
