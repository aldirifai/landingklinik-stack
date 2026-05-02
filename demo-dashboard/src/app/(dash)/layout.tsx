"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { SidebarToggleContext } from "@/components/dashboard/SidebarContext";

export default function DashLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-canvas">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <SidebarToggleContext.Provider value={() => setSidebarOpen(true)}>
          {children}
        </SidebarToggleContext.Provider>
      </div>
    </div>
  );
}
