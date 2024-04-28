/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#f3915c',
        'custom-grey':'#a3a29e',
      },
    },
  },
  plugins: [],
}

