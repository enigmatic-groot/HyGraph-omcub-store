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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      neutral: {
        50: '#F9FAFD',
        100: '#F2F3F7',
        200: '#E6E7EF',
        300: '#C4C5CF',
        400: '#9597A0',
        500: '#595A62',
        600: '#414254',
        700: '#2C2F46',
        800: '#1C1E38',
        900: '#11132F'
      },
      primary: {
        100: '#D6E4FF',
        200: '#ADC8FF',
        300: '#84A9FF',
        400: '#6690FF',
        500: '#3366FF',
        600: '#254EDB',
        700: '#1939B7',
        800: '#102693',
        900: '#091A7A'
      }
    },
    fontSize: {
      'display-2xl': [
        '72px',
        {
          lineHeight: '75px',
          letterSpacing: '0'
        }
      ],
      'display-xl': [
        '60px',
        {
          lineHeight: '65px',
          letterSpacing: '0'
        }
      ],
      'display-lg': [
        '48px',
        {
          lineHeight: '55px',
          letterSpacing: '0'
        }
      ],
      'display-md': [
        '40px',
        {
          lineHeight: '45px',
          letterSpacing: '0'
        }
      ],
      'display-sm': [
        '32px',
        {
          lineHeight: '38px',
          letterSpacing: '0'
        }
      ],
      'display-xs': [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '0'
        }
      ],
      'body-xl': [
        '20px',
        {
          lineHeight: '30px',
          letterSpacing: '0'
        }
      ],
      'body-lg': [
        '18px',
        {
          lineHeight: '28px',
          letterSpacing: '0'
        }
      ],
      'body-md': [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '0'
        }
      ],
      'body-sm': [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '0'
        }
      ],
      'body-xs': [
        '12px',
        {
          lineHeight: '18px',
          letterSpacing: '0'
        }
      ]
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem'
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
