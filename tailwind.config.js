/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  darkMode: true,
  theme: {
    extend: {
      fontFamily:{
        'inter':["Inter", "sans-serif"], 
      },
      fontSize:{
        smm: '15px',
        xss: '11px',
        '13px': '13px'
      },
      colors: {
        lightGray: '#E0E0E0',
        bgColor: '#F0F0F0'
      },
      textColor:{},
      backgroundColor:{
        darkGray: "#f5f5f5"
      },
      borderColor: {

      },
      width:{
        '70px': '70px'
      },
      height:{},
      minWidth:{
        
        '200px': '200px',
        '250px': '250px',
        '300px': '300px'
      },
      maxWidth:{},
      minHeight:{
        '40px': '40px',
      },
      maxHeight:{},
      lineHeight: {
        '2.5': 2.5
      },
      spacing:{},
      padding:{},
      zIndex:{},
      textTransform: {},
      letterSpacing:{}
    },
  },
  plugins: [],
}

