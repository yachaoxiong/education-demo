import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#edf4ff",
          100: "#dceaff",
          200: "#b8d4ff",
          300: "#8cb8ff",
          400: "#5f93ea",
          500: "#2f69d6",
          600: "#1f56c7",
          700: "#1847a8",
          800: "#143a88",
          900: "#0f2a61",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 37, 93, 0.08)",
        card: "0 12px 28px rgba(15, 37, 93, 0.07)",
        lift: "0 18px 40px rgba(15, 37, 93, 0.12)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(90deg, rgba(229,240,255,1) 0%, rgba(245,249,255,1) 48%, rgba(255,255,255,1) 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #0f2f75 0%, #123d9a 46%, #2473ff 100%)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
