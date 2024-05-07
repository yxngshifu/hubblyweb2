/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
     screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily:{MuseoModerno:['MuseoModerno', 'sans-serif'],
       Raleway: ['Raleway', 'sans-serif'],
    },
    },
  },
  plugins: [],
}