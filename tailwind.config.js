/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'custom' : '#000000',
      },
      backgroundColor : {
        'headeTable' : "#7f6c91"
      }
    },
  },
  plugins: [],
}

