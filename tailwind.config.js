
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#E8EBF0',
          100: '#C5CBD6',
          500: '#1A2744',
          700: '#0F1B2D',
          800: '#0B1420',
          900: '#070D15'
        },
        gold: {
          400: '#D4AF37',
          500: '#C9A84C',
          600: '#B8972E'
        }
      }
    },
  },
  plugins: [],
}
