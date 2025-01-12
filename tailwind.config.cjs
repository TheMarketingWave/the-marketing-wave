/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

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
        "brand-green-accent": "#00FFD8",
      },
      boxShadow: {
        brand: "4px 4px 0px rgba(250, 68, 21, 0.2)",
        "brand-img": "8px 8px 0px rgba(250, 68, 21, 0.2)",
      },
      textShadow: {
        DEFAULT: "4px 4px 0px rgba(250, 68, 21, 0.2)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
