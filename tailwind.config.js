/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // Keep this if you still want dark mode toggle
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    fontFamily: {
      monoton: ["Monoton", "cursive"],
      satoshi: ["Satoshi", "sans-serif"],
      clash: ["Clash Display", "sans-serif"],
      infinite: ["Outfit", "sans-serif"],
      bebasneo: ["Bebas Neue", "cursive"],
    },
    extend: {
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.1)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.05)",
        card: "0 6px 24px rgba(0, 0, 0, 0.1)",
        "inner-glow": "inset 0 0 10px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        bg: {
          DEFAULT: "#ffffff", // White background
          light: "#f8f9fa",   // Light gray background
          softer: "#e5e7eb",  // Tailwind gray-200
        },
        primary: {
          DEFAULT: "#3B82F6", // Blue-500
          light: "#60A5FA",
          dark: "#1D4ED8",
        },
        secondary: {
          DEFAULT: "#6B7280", // Gray-600
          light: "#9CA3AF",
        },
        accent: "#F59E0B",      // Amber-500
        neutral: "#F3F4F6",     // Light gray-100
        base: "#FFFFFF",        // White
        info: "#2563EB",        // Blue-600
        success: "#16A34A",     // Green-600
        warning: "#D97706",     // Orange-600
        error: "#DC2626",       // Red-600
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3B82F6",
          secondary: "#6B7280",
          accent: "#F59E0B",
          neutral: "#F3F4F6",
          "base-100": "#FFFFFF", // This makes your main background white
          info: "#2563EB",
          success: "#16A34A",
          warning: "#D97706",
          error: "#DC2626",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],
};
