/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "carter" : ["carter one", "serif"]
      }
    },
  },
  darkMode: false,
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light"]
  }
}

