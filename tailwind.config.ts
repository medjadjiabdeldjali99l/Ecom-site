import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F5DC",
        forest: {
          DEFAULT: "#718355",
          light: "#8A9F6A",
          dark: "#5A6A44",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        elegant: "0 10px 40px rgba(113, 131, 85, 0.1)",
        "elegant-lg": "0 20px 60px rgba(113, 131, 85, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
