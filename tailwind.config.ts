import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#2dd4bf",
          foreground: "#0f172a",
        },
        background: "#080c10",
        foreground: "#f1f5f9",
        muted: {
          DEFAULT: "#1e2530",
          foreground: "#94a3b8",
        },
        card: {
          DEFAULT: "#0f1520",
          foreground: "#f1f5f9",
        },
        border: "#1e2d3d",
        input: "#1e2d3d",
        secondary: {
          DEFAULT: "#111827",
          foreground: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
