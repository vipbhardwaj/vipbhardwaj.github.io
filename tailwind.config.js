module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0b0d1b",
        magenta: "#e67eff",
        pink: "#ff4141",
        crimson: "#ff00dd",
      },
      backdropBlur: {
        glass: "10px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(230, 126, 255, 0.8)",
        "glow-sm": "0 0 10px rgba(230, 126, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
