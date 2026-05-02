import { cn } from "@/lib/utils";

type Props = {
  initials?: string;
  className?: string;
  alt?: string;
};

export function PortraitPlaceholder({
  initials = "AL",
  className,
  alt = "Foto profil",
}: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/15 via-accent/15 to-secondary",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,hsl(var(--primary)/0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_85%,hsl(var(--accent)/0.18),transparent_55%)]" />
      <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm shadow-sm">
        <span className="font-display text-3xl font-semibold text-primary">
          {initials}
        </span>
      </div>
      <span className="absolute bottom-3 right-3 rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium text-muted-foreground">
        Foto placeholder
      </span>
    </div>
  );
}
