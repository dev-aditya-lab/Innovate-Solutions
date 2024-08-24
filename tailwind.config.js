/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      adii :["Rubik", 'sans-serif'],
    },
    extend: {
      borderRadius: {
        'hero-img-border': '17% 83% 70% 30% / 42% 39% 61% 58%',
      },
    },
  },
  plugins: [],
}