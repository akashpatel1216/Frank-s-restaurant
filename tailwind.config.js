/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'diner-red': '#E63946',
        'diner-cream': '#F1FAEE',
        'diner-blue': '#457B9D',
        'diner-dark': '#1D3557',
        'diner-yellow': '#FFB703',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

