/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sofadi:"'Sofadi One', system-ui",
        robotocondence:"'Roboto Condensed', sans-serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

