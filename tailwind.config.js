/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#141526',
        'custom-start-red': 'rgba(255, 3, 3, 1)',
        'custom-center-red': 'rgba(153, 2, 2, 0.495)'
      },
      fontFamily: {
        'custom-regular-400-italic': 'regular-400-italic',
        'custom-regular-400': 'regular-400' ,
        'custom-medium-500-italic': 'medium-500-italic' ,
        'custom-semiBold-600': 'semiBold-600' 
      },
      fontSize: {
        'custom-fz-100': '100px'
      },
      width: {
        'custom-width-95': '95%'
      },
      height: {
        'custom-height-90': '90%'
      },
      top: {
        'custom-top-5' : '5%'
      },
      left:{
        'custom-l-47': '47%'
      },
      letterSpacing: {
        'custom-l-s': '10px'
      },
      backgroundImage: {
        'custom-bg-image': "url('https://source.unsplash.com/MP0IUfwrn0A')"
      },
      maxWidth: {
        'custom-mw-70': '70%'
      },
      minWidth: {
        'custom-w-832': '832px'
      },
      borderBottom: {
        'custom-border-solid': '1px solid white'
      }
    },
  },
  plugins: [],
}
