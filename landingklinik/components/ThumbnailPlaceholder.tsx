import { cn } from "@/lib/utils";

type Props = {
  gradient: string;
  label?: string;
  className?: string;
  alt?: string;
  /** URL demo live untuk ditampilkan di "address bar" mockup */
  demoUrl?: string;
};

/**
 * Thumbnail mockup case study — bukan gambar asli, tapi browser frame
 * dengan layout landing page miniatur. Lebih designed daripada gradient polos.
 */
export function ThumbnailPlaceholder({
  gradient,
  label,
  className,
  alt = "Mockup case study",
  demoUrl,
}: Props) {
  const displayUrl = demoUrl
    ? demoUrl.replace(/^https?:\/\//, "")
    : "demo.landingklinik.id";

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-card",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-3 py-2">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-rose-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 truncate rounded bg-card px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
          {displayUrl}
        </div>
      </div>

      {/* Page preview — gradient hero with content lines */}
      <div className="relative h-[calc(100%-1.75rem)] overflow-hidden">
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-1/2 bg-gradient-to-br opacity-90",
            gradient
          )}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.35),transparent_55%)]" />

        {/* "Content" rectangles */}
        <div className="absolute inset-x-4 top-4 sm:inset-x-6">
          <div className="h-1.5 w-2/3 rounded-full bg-white/75" />
          <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/55" />
          <div className="mt-3 flex gap-1.5">
            <div className="h-3 w-12 rounded bg-white/85" />
            <div className="h-3 w-10 rounded border border-white/60" />
          </div>
        </div>

        {/* Bottom card grid */}
        <div className="absolute inset-x-4 bottom-3 grid grid-cols-3 gap-1.5 sm:inset-x-6">
          <div className="h-7 rounded-sm border border-border bg-card/95 shadow-sm" />
          <div className="h-7 rounded-sm border border-border bg-card/95 shadow-sm" />
          <div className="h-7 rounded-sm border border-border bg-card/95 shadow-sm" />
        </div>

        {label ? (
          <span className="absolute bottom-12 left-4 text-[10px] font-medium uppercase tracking-wider text-foreground/70 sm:left-6">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
