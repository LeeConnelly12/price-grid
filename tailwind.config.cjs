/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './main.js'],
  theme: {
    extend: {
      colors: {
        teal: {
          600: 'hsl(179, 62%, 43%)',
        },
        lime: {
          500: 'hsl(71, 73%, 54%)',
        },
        slate: {
          300: 'hsl(204, 43%, 93%)',
          500: 'hsl(218, 22%, 67%)',
        },
      },
    },
  },
  plugins: [],
}
