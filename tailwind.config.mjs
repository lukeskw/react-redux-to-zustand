/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      width: {
        'main-container': '1100px',
      },
      height: {
        36: '36rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
