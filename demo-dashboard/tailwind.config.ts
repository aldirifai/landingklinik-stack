import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563EB",
          50: "#EFF6FF",
          100: "#DBEAFE",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E40AF",
        },
        sidebar: "#1F2937",
        sidebarHover: "#111827",
        canvas: "#F9FAFB",
        status: {
          new: "#3B82F6",
          newBg: "#DBEAFE",
          contacted: "#F59E0B",
          contactedBg: "#FEF3C7",
          booked: "#10B981",
          bookedBg: "#D1FAE5",
          noshow: "#EF4444",
          noshowBg: "#FEE2E2",
          archived: "#6B7280",
          archivedBg: "#F3F4F6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
