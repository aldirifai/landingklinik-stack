import * as Icons from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  name: string;
  className?: string;
  iconClassName?: string;
};

export function IconBadge({ name, className, iconClassName }: Props) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Sparkles;
  return (
    <div
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600",
        className
      )}
    >
      <Icon className={cn("h-6 w-6", iconClassName)} aria-hidden="true" />
    </div>
  );
}
