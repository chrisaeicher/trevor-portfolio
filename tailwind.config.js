/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'green': {
          'tn': '#00ff8b',
        }
      },
    },
  },
  plugins: [],
}

