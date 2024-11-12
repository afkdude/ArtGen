/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navColor':'#181A1A',
      },
      fontFamily: {
        'denk': ['Denk One', 'sans-serif'],
        'display': ['Poppins','sans-serif'],
        'body':['Inter','sans-serif'],
      },
    }
    ,
  },
  plugins: [],
}