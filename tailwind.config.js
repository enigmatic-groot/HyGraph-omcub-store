const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      mobileBig: '576px',
      // => @media (min-width: 576px) { ... }
      tablet: '768px',
      // => @media (min-width: 768px) { ... }
      laptop: '992px',
      // => @media (min-width: 992px) { ... }
      desktop: '1200px',
      // => @media (min-width: 1200px) { ... }
      desktopBig: '1360px'
      // => @media (min-width: 1360px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
    debugScreens: {
      position: ['bottom', 'right']
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked']
    }
  },
  plugins: [require('tailwindcss-debug-screens')]
}
