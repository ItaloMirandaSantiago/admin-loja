/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "90%" : '90%'
      },
      backgroundColor : {
        'headeTable' : "#e1d1d1",
        'graphic' : '#bfb8b8'
      }, 
      boxShadow : {
        'customMenu' : '0px 7px 11px rgba(0,0,0, .7)'
      },
    },
  },
  plugins: [],
}

