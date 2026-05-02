import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1E3A8A",
          50: "#EFF3FB",
          100: "#DCE3F4",
          200: "#B8C7E9",
          400: "#5B7BC9",
          500: "#1E3A8A",
          600: "#1A327A",
          700: "#16296A",
          800: "#11205B",
          900: "#0A0F1E",
        },
        gold: {
          DEFAULT: "#C9A961",
          50: "#FAF6EC",
          100: "#F2EAD0",
          400: "#D6BC81",
          500: "#C9A961",
          600: "#B08F47",
          700: "#8E7338",
        },
        ink: "#0A0F1E",
        canvas: "#FFFFFF",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        refined:
          "0 1px 2px rgba(10, 15, 30, 0.04), 0 4px 16px rgba(10, 15, 30, 0.06), 0 24px 48px -12px rgba(10, 15, 30, 0.08)",
        gold: "0 0 0 1px rgba(201, 169, 97, 0.4), 0 12px 32px -8px rgba(201, 169, 97, 0.3)",
      },
      borderRadius: {
        md: "0.375rem",
      },
    },
  },
  plugins: [],
};

export default config;
