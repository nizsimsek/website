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
        'code-orange': '#F8AA35',
        'code-pink': '#F38FDE',
        'code-blue': '#4A79FC',
        'code-soft-blue': '#95B1EC',
        'code-red': '#D34D57',
        'code-yellow': '#FFFF00',
        'code-green': '#5DE8A1',
        'code-soft-green': '#C3E88D',
        'code-neon-green': '#67EC6C',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
