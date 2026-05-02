import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
  url?: string;
};

export function BrowserMockup({
  className,
  children,
  url = "klinikgigi-anda.id",
}: Props) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-white shadow-lg",
        className
      )}
      role="img"
      aria-label="Mockup tampilan browser landing page klinik"
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="ml-3 flex h-6 flex-1 items-center rounded-md border border-border bg-white px-3 text-xs text-muted-foreground">
          {url}
        </div>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
