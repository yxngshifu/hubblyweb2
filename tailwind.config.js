/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
     screens: {
      'sm': '344px',
      // => @media (min-width: 375px) { ... }

      'md': '576px',
      // => @media (min-width: 576px) { ... }

      'lg': '960px',
      // => @media (min-width: 960px) { ... }
      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }
      '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily:{MuseoModerno:['MuseoModerno', 'sans-serif'],
       Raleway: ['Raleway', 'sans-serif'],
    },
    },
  },
  plugins: [],
}