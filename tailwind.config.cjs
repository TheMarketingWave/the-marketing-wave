/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat Alternates"'],
      },
      colors: {
        "brand-orange": "#FA4415",
        "brand-bg-gray": "#E8DFD4",
        "brand-green": "#00A88E",
        "brand-purple": "#43283B",
      },
      boxShadow: {
        brand: "4px 4px 0px rgba(250, 68, 21, 0.2)",
      },
    },
  },
  plugins: [],
};
