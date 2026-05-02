"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type Item = { q: string; a: string };

export function Accordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full min-h-[3rem] items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-ink sm:text-base">{item.q}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-slate-400 transition-transform",
                  isOpen && "rotate-180 text-brand-600"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-5 text-sm leading-relaxed text-slate-600 sm:px-5">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
