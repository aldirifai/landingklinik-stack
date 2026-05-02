"use client";

import { createContext, useContext } from "react";

export const SidebarToggleContext = createContext<() => void>(() => {});

export function useOpenSidebar() {
  return useContext(SidebarToggleContext);
}
