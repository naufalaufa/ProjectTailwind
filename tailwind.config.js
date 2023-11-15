/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lilita: ["Work Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
