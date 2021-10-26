const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: colors.gray[100],
          dark: colors.gray[900],
        },
        red: {
          DEFAULT: colors.red[500],
          dark: colors.red[800],
        },
        yellow: {
          DEFAULT: colors.yellow[500],
          dark: colors.yellow[800],
        },
        green: {
          DEFAULT: colors.green[500],
          dark: colors.green[800],
        },
        blue: {
          DEFAULT: colors.blue[500],
          dark: colors.blue[800],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
