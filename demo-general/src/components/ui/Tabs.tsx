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
        className="mb-6 flex gap-2 overflow-x-auto rounded-lg bg-slate-100 p-1"
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
                "whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition",
                isActive
                  ? "bg-white text-brand-600 shadow-card"
                  : "text-slate-600 hover:text-ink"
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
