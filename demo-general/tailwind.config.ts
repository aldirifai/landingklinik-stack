import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0EA5E9",
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          900: "#0C4A6E",
        },
        accent: {
          DEFAULT: "#FBBF24",
          50: "#FFFBEB",
          100: "#FEF3C7",
          500: "#FBBF24",
          600: "#D97706",
        },
        ink: "#0F172A",
        canvas: "#FAFAFA",
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.06)",
        cardHover: "0 4px 8px rgba(15, 23, 42, 0.06), 0 12px 24px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        lg: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
