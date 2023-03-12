/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'nav' : ' 0px 4px 4px rgba(245, 148, 40, 0.58)',
        'stock' : '0px 4px 6px #F59428',
        'lan' : ' 0px 4px 3px rgba(245, 148, 40, 0.51)',
        'lan1' : '0px 4px 9px rgba(245, 148, 40, 0.81)',
        'eff' : '0px 4px 5px rgba(245, 148, 40, 0.76)'
      },
      fontFamily: {
        'nav' : ['Poppins']
      },
      letterSpacing: {
        'nav' : '3.1px',
        'lan' : '1.1px',
        'comm' : '-0.4px',
        'nav1' : '0.6px'
      },
      boxShadow: {
        'nav' : '0px 4px 22px rgba(0, 0, 0, 0.1)',
        'lan' : '1px 15px rgba(0, 0, 0, 0.18)',
        'card' : '0px 0px 60px rgba(0, 0, 0, 0.13)',
        'card2' : '0px 0px 61px rgba(0, 0, 0, 0.09)',
        'tap' : '1px 15px rgba(0, 0, 0, 0.18)',
        'grpcard': '0px 0px 22px rgba(0, 0, 0, 0.06)'
      },
      borderRadius: {
        'card' : '30px'
      },
      fontSize: {
        'eff' : '64px'
      }
    },
  },
  plugins: [],
}
