/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}', './src/**/*.{html,js,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      'bg-color': 'var(--bg-color)',
      default: 'var(--text-color)',
      ...colors
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto'
      }
    }
  },
  plugins: []
};
