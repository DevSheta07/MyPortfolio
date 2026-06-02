/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          indigo: '#22223bff',
        },
        dusty: {
          grape: '#4a4e69ff',
        },
        lilac: {
          ash: '#9a8c98ff',
        },
        almond: {
          silk: '#c9ada7ff',
        },
        parchment: {
          DEFAULT: '#f2e9e4ff',
          50: '#faf7f5',
          100: '#f2e9e4',
          200: '#e8ddd8',
          300: '#d8cac4',
          400: '#c9ada7',
          500: '#b88982',
          600: '#9a8c98',
          700: '#7e7380',
          800: '#605866',
          900: '#453e4b',
        },
        ink: {
          DEFAULT: '#22223b',
          soft: '#4a4e69',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
        script: ['Caveat', 'cursive'],
      },
      borderRadius: {
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
}