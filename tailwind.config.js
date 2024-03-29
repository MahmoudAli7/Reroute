/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#95A1F9",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xxs: "375px",
      xs:  "480px",
      ss:  "620px",
      sm:  "768px",
      md:  "1060px",
      lg:  "1200px",
      mlg: "1700px",
      xl:  "2036px",
    },
  },
  plugins: [],
};

