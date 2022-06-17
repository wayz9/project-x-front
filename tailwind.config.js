/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky
      }
    },
    fontFamily: {
      sans: ['Raleway-v4020', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
