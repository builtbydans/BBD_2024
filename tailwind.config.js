/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-dmsans)",
    },
    extend: {
      colors: {
        primary: "#f9f6f0",
        accent: {
          DEFAULT: "#6036ff",
          hover: "#00e187",
        },
        secondary: "#1e1e1e",
      },
    },
  },
  plugins: [],
};
