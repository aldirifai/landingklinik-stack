"use client";

import { Bell, Menu, Search } from "lucide-react";
import { userName, userRole } from "@/lib/data";
import { userAvatar } from "@/lib/images";
import { useOpenSidebar } from "./SidebarContext";

export function Topbar({ title }: { title: string }) {
  const openSidebar = useOpenSidebar();

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6 gap-3">
      <div className="flex items-center gap-2 min-w-0">
        <button
          type="button"
          onClick={openSidebar}
          aria-label="Open sidebar"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-gray-200 text-gray-500 hover:bg-canvas md:hidden"
        >
          <Menu className="h-4 w-4" />
        </button>
        <h1 className="truncate text-base sm:text-lg font-semibold text-gray-900">{title}</h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative hidden md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Cari pasien, booking..."
            className="h-9 w-72 rounded-md border border-gray-200 bg-canvas pl-9 pr-3 text-sm placeholder:text-gray-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/15"
          />
        </div>

        <button
          type="button"
          aria-label="Search"
          className="grid h-9 w-9 place-items-center rounded-md border border-gray-200 text-gray-500 hover:bg-canvas md:hidden"
        >
          <Search className="h-4 w-4" />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative grid h-9 w-9 shrink-0 place-items-center rounded-md border border-gray-200 text-gray-500 hover:bg-canvas"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
            6
          </span>
        </button>

        <div className="flex items-center gap-3 rounded-md sm:border sm:border-gray-200 sm:px-3 sm:py-1.5">
          <div className="h-8 w-8 sm:h-7 sm:w-7 overflow-hidden rounded-full bg-brand-500/10 ring-1 ring-brand-500/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={userAvatar}
              alt={`Avatar ${userName}`}
              className="h-full w-full"
              loading="lazy"
              width={32}
              height={32}
            />
          </div>
          <div className="hidden text-xs leading-tight sm:block">
            <p className="font-medium text-gray-900">{userName}</p>
            <p className="text-gray-500">{userRole}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
