/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["'Bebas Neue'", "cursive"],
        cinzel: ["Cinzel", "serif"],
        inter: ["Inter", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
      },
      colors: {
        flavora: {
          red: "#e63329",
          orange: "#f97316",
          gold: "#f59e0b",
          dark: "#080810",
          dark2: "#0d0d1a",
          dark3: "#12121f",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "scroll-left": "scrollLeft 25s linear infinite",
        "scroll-right": "scrollRight 25s linear infinite",
        "smoke-rise": "smokeRise 4s ease-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 20px rgba(230,51,41,0.4)" },
          "50%": { boxShadow: "0 0 50px rgba(230,51,41,0.8), 0 0 80px rgba(249,115,22,0.4)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        smokeRise: {
          "0%": { opacity: 0, transform: "translateY(0) scale(1)" },
          "50%": { opacity: 0.3 },
          "100%": { opacity: 0, transform: "translateY(-60px) scale(2)" },
        },
        fadeInUp: {
          from: { opacity: 0, transform: "translateY(40px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: 0, transform: "scale(0.8)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
      },
      backgroundImage: {
        "radial-red": "radial-gradient(ellipse at center, rgba(230,51,41,0.15) 0%, transparent 70%)",
        "radial-orange": "radial-gradient(ellipse at center, rgba(249,115,22,0.1) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
