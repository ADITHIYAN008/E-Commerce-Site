/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#F2F0F1",
        primary: "white",
        secondary: "black",
        itembg: "#F0EEED",
      },
      fontFamily: {
        secondary: "Integral CF Regular",
        primary: "Satoshi",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
