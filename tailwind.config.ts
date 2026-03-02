import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arbon: {
          red: "#B01818",
          "red-light": "#B01818",
          "red-dark": "#B01818",
          "red-muted": "#B01818",
          "red-border": "#B01818",
          white: "#FFFFFF",
          "off-white": "#F9F9F9",
          gray: "#6B6B6B",
          "gray-light": "#E8E8E8",
          "gray-ultra": "#F2F2F2",
          dark: "#0F0F0F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-up": "fadeUp 0.6s ease both",
        "fade-in": "fadeIn 0.5s ease both",
        pulse2: "pulse2 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
