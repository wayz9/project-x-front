/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky
      },
      animation: {
        colorChange: 'colorChange 5s ease-in-out infinite'
      },
      keyframes: {
        colorChange: {
          '0%': { 'background-color': '#facc15' },
          '25%': { 'background-color': '#4ade80' },
          '50%': { 'background-color': '#a78bfa' },
          '75%': { 'background-color': '#38bdf8' },
          '100%': { 'background-color': '#facc15' }
        }
      }
    },
    fontFamily: {
      sans: ['Raleway-v4020', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
