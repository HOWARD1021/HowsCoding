/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto Mono', 'monospace'],
        'Aclonica': ['Aclonica', 'sans-serif'],
        'Josefin': ['Josefin Sans', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),

  ],
}
