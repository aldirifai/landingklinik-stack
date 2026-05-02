import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: "#FB7185",
          50: "#FFF1F3",
          100: "#FFE2E7",
          200: "#FECBD3",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
        },
        mint: {
          DEFAULT: "#6EE7B7",
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          400: "#6EE7B7",
          500: "#10B981",
          600: "#059669",
        },
        sun: {
          DEFAULT: "#FCD34D",
          50: "#FFFBEB",
          100: "#FEF3C7",
          400: "#FCD34D",
          500: "#F59E0B",
        },
        ink: "#1F2937",
        canvas: "#FEFCE8",
      },
      fontFamily: {
        display: ["Quicksand", "system-ui", "sans-serif"],
        sans: ["Nunito", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 16px rgba(251, 113, 133, 0.08), 0 12px 32px -8px rgba(110, 231, 183, 0.12)",
        coral: "0 8px 24px -8px rgba(244, 63, 94, 0.35)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
