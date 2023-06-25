/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'red': '#912121',
      'hover-red': '#9b3b3b',
      'grey': '#d2d2d2',
      'white': '#ffffff'  
    },
    fontFamily: {
      sans: ['Titillium Web', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

