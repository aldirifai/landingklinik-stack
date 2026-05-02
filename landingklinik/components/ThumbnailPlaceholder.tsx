import { cn } from "@/lib/utils";

type Props = {
  gradient: string;
  label?: string;
  className?: string;
  alt?: string;
};

export function ThumbnailPlaceholder({
  gradient,
  label,
  className,
  alt = "Thumbnail klinik",
}: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-gradient-to-br",
        gradient,
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgba(255,255,255,0.18),transparent_55%)]" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        {label ? (
          <p className="text-balance text-center font-display text-lg font-semibold text-white drop-shadow-sm sm:text-xl">
            {label}
          </p>
        ) : null}
      </div>
      <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-medium text-foreground">
        Mockup case study
      </div>
    </div>
  );
}
