/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        batman: ["Batman", "sans-serif"],
      },
      colors: {
        primary: "#0b1723",
      },
    },
  },
  plugins: [],
};
