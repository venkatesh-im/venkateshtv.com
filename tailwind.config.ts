import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Impelox-aligned blues (primary UI) */
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        surface: {
          DEFAULT: "#0d1117",
          elevated: "#161b27",
        },
        bg: {
          DEFAULT: "#030712",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #2563eb, #0891b2)",
        "gradient-text": "linear-gradient(135deg, #60a5fa, #38bdf8, #22d3ee)",
      },
      boxShadow: {
        "glow-brand": "0 0 24px rgba(37, 99, 235, 0.35)",
        "glow-brand-lg": "0 0 48px rgba(37, 99, 235, 0.4)",
      },
      keyframes: {
        "agent-dash": {
          to: { strokeDashoffset: "-48" },
        },
        "hub-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "agent-dash": "agent-dash 2.2s linear infinite",
        "hub-pulse": "hub-pulse 3s ease-in-out infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
