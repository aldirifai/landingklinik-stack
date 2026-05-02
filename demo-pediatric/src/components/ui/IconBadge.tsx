import * as Icons from "lucide-react";
import { cn } from "@/lib/cn";

type Tone = "coral" | "mint" | "sun";

const tones: Record<Tone, string> = {
  coral: "bg-coral-100 text-coral-600",
  mint: "bg-mint-100 text-mint-600",
  sun: "bg-sun-100 text-sun-500",
};

type Props = {
  name: string;
  tone?: Tone;
  className?: string;
};

export function IconBadge({ name, tone = "coral", className }: Props) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Sparkles;
  return (
    <div
      className={cn(
        "inline-flex h-14 w-14 items-center justify-center rounded-2xl",
        tones[tone],
        className
      )}
    >
      <Icon className="h-6 w-6" aria-hidden="true" />
    </div>
  );
}
