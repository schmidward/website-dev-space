/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'red': '#912121',
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

