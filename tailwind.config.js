/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ['"Inter", sans-serif'],
    },
    extend: {
      transitionDuration: {
        3000: "3000ms",
      },
    },
  },
  plugins: [],
};
