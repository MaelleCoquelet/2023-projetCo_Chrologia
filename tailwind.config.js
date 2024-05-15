/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif:['OpenSans', 'sans-serif']
    },
    extend: {
      colors:{
        orpink:{
          200: '#F7AF9D',
        }
      }
    }
  },
  plugins: []
}
