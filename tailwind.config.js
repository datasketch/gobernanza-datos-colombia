module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: ['./layouts/**/*.html', './assets/js/lib/map-templates.js'],
    options: {
      safelist: []
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'IBM-Plex-Sans': ['IBM Plex Sans', 'sans-serif']
      },
      backgroundImage: {},
      colors: {
        purple: '#ED58FC',
        blue: '#5141FB',
        green: '#35C4B9',
        orange: '#FEA829',
        pink: '#DA1C95',
        'blue-dark': '#272C57',
        black: '#222526',
        white: '#FAFAFA'
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1366px',
        // => @media (min-width: 1366px) { ... }

        '2xl': '1920px'
        // => @media (min-width: 1920px) { ... }
      }
    }
  },
  variants: {
    extend: {}
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/aspect-ratio')]
}
