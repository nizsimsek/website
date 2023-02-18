/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      fira: ['Fira Code', ...fontFamily.sans],
    },

    extend: {
      colors: {
        'c-border': '#1E2D3D',
        'c-muted': '#607B96',
        'c-purple': '#4D5BCE',
        'c-turquoise': '#43D9AD',
        'c-pink': '#E99287',
        'c-ghost': '#1E2D3D',
        'c-darker': '#011221',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
