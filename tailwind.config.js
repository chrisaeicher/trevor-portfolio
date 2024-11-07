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
          'light-tn': '#9e4821',
          'dark-tn': '#541a00'
        }
      },
    },
  },
  plugins: [],
}

