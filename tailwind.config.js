/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1140px',
      },
      spacing: {
        'w725': '725px',
        'w806': '806px',
        'w412': '412px',
        'w390': '390px',
        'w833': '833px',
        'w680': '680px',
        'w270': '270px',
        'w20': '20px',
        'h150': '150px',
        'h20': '20px',
        'w40': '40%',
      },
      colors: {
        'primary': '#D3EBFF',
        'secondary': '#3b82f6',
        'third': '#E7F5FF',
        'four': '#FAFDFF',
        'five': '#333333',
        'six': '#4D4D4D',
        'seven': '#93c5fd',
      },
      fontSize:{
        text28:"28px",
        text50:"50px",
        text45:"45px",
      },
      fontFamily: {
        'robo': ['Roboto Slab'],
        'mus': ['MuseoModerno'],
        'pop': ['Poppins'],
      },
      backgroundImage: {
        'banner': "url('src/assets/banner.png')",
      },
      rotate: {
        'sajib360': '360deg',
      }
      
    },
  },
  plugins: [],
}

