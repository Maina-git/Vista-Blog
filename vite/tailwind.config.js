/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      violet: '#6A0DAD',
      purple: '#9370DB',
      }
    },
  },
  plugins: [],
}

