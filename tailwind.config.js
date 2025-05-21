/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#FF5A00',
        'primary-light': '#FF7A30',
        'primary-dark': '#E05000',
        'secondary': '#101010',
        'secondary-light': '#2A2A2A',
        'secondary-dark': '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};