import { cn } from "@/lib/utils";

type Props = {
  initials?: string;
  /** Nama lengkap untuk seed avatar (lebih konsisten daripada initials) */
  name?: string;
  className?: string;
  alt?: string;
};

/**
 * Portrait avatar — pakai DiceBear notionists-neutral SVG (deterministik per seed).
 * Lebih profesional daripada inisial polos, dan tidak terlihat seperti stock photo
 * generic. Cocok untuk testimonial hypothetical.
 */
export function PortraitPlaceholder({
  initials = "AL",
  name,
  className,
  alt = "Foto profil",
}: Props) {
  const seed = name ?? initials;
  const avatarUrl = `https://api.dicebear.com/9.x/notionists-neutral/svg?seed=${encodeURIComponent(seed)}&backgroundColor=dbeafe,bfdbfe,c7d2fe,fde68a&backgroundType=gradientLinear`;

  return (
    <div
      className={cn(
        "relative aspect-square w-full overflow-hidden rounded-xl bg-secondary ring-1 ring-border",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatarUrl}
        alt={alt}
        className="h-full w-full"
        loading="lazy"
        width={128}
        height={128}
      />
    </div>
  );
}
