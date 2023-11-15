/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        cyan: {
          1000: "#323A49",
        },
        neon: {
          1000: "#56FFAD",
        },
        grayish: {
          1000: "#1F2632",
        },
        hovercolor: {
          1000: "#52ffa8"
        },
      },
    },
  },
  plugins: [],
};

