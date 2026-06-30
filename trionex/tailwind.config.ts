import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#1E40AF",
        accent: "#00C2FF",
        cta: "#FF6B00",
        surface: "#FFFFFF",
        section: "#F8FAFC",
        ink: "#111827",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        stat: ["var(--font-space)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter2: "-0.02em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "linear-gradient(135deg, #0F172A 0%, #1E40AF 50%, #00C2FF 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(15, 23, 42, 0.12)",
        "glass-lg": "0 20px 60px -10px rgba(15, 23, 42, 0.25)",
        glow: "0 0 40px rgba(0, 194, 255, 0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
