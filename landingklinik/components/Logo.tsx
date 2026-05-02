import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "default" | "invert";
};

export function Logo({ className, variant = "default" }: Props) {
  const text = variant === "invert" ? "text-white" : "text-foreground";
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-display font-semibold tracking-tight",
        text,
        className
      )}
      aria-label="landingklinik.id beranda"
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-md",
          variant === "invert" ? "bg-white/15" : "bg-primary"
        )}
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke={variant === "invert" ? "white" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 7c-2 0-3.5 1.6-3.5 3.6 0 2.6 1.5 4.4 3 6.4 1 1.4 1.5 3 2.5 3s1.5-1.6 2-1.6 1 1.6 2 1.6 1.5-1.6 2.5-3c1.5-2 3-3.8 3-6.4C19.5 8.6 18 7 16 7c-1.5 0-2.5 0.8-3 1.6-0.5 0.6-1 1-1 1s-0.5-0.4-1-1C10.5 7.8 9.5 7 8 7z" />
        </svg>
      </span>
      <span className="text-base">landingklinik.id</span>
    </Link>
  );
}
