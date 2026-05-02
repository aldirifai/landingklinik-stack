"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Inbox,
  CalendarDays,
  Users,
  BarChart3,
  Settings,
  Stethoscope,
  LogOut,
  X,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { clinicName } from "@/lib/data";

const navItems = [
  { href: "/inbox", label: "Inbox", icon: Inbox },
  { href: "/bookings", label: "Bookings", icon: CalendarDays },
  { href: "/patients", label: "Patients", icon: Users },
  { href: "/reports", label: "Reports", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
];

type SidebarProps = {
  open?: boolean;
  onClose?: () => void;
};

export function Sidebar({ open = false, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          aria-hidden="true"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex h-screen w-60 shrink-0 flex-col bg-sidebar text-gray-300 transform transition-transform duration-200 ease-out",
          "md:static md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center gap-3 border-b border-white/10 px-5">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-brand-500 text-white">
            <Stethoscope className="h-4 w-4" />
          </span>
          <div className="leading-tight flex-1">
            <p className="text-xs font-medium text-white">{clinicName}</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-500">
              Dashboard
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="rounded-md p-1.5 text-gray-400 hover:bg-sidebarHover hover:text-white md:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition",
                  active
                    ? "bg-brand-500/15 text-white"
                    : "text-gray-400 hover:bg-sidebarHover hover:text-white"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-3 py-4">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-400 transition hover:bg-sidebarHover hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Link>
          <p className="mt-3 px-3 text-[10px] text-gray-600">
            Demo dashboard untuk landingklinik.id
          </p>
        </div>
      </aside>
    </>
  );
}
