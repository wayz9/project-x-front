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
      fontSize: {
        md: '15px'
      },
      backgroundImage: {
        'dotted-pattern': "url('/src/assets/dotted-pattern.svg')"
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
      sans: ['Lexend', ...defaultTheme.fontFamily.sans],
      mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
    }
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')]
}
