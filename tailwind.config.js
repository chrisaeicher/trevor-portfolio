/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'orange': {
          'tn': '#DF5E24'
        },
        'red': {
          'tn': '#C00425'
        }
      },
    },
  },
  plugins: [],
}

