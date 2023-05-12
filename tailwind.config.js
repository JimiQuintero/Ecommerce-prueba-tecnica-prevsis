/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      rela: ["Raleway", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
