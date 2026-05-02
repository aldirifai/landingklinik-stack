"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tab = { id: string; label: string; content: ReactNode };

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);

  return (
    <div>
      <div
        role="tablist"
        className="mb-6 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(tab.id)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-bold transition whitespace-nowrap",
                isActive
                  ? "bg-coral-400 text-white shadow-coral"
                  : "bg-white text-slate-700 hover:bg-coral-50"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            hidden={active !== tab.id}
            className={active !== tab.id ? "hidden" : ""}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
