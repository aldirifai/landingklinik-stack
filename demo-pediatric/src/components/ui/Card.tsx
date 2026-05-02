import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border-2 border-coral-100 bg-white p-6 shadow-soft",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";
