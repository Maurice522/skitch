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
        'eff' : '0px 4px 5px rgba(245, 148, 40, 0.76)',
        'skitch': '0px 4px 31px rgba(245, 148, 40, 0.22)'
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
        'grpcard': '0px 0px 22px rgba(0, 0, 0, 0.06)',
        'filter' : '0px 0px 12px rgba(0, 0, 0, 0.08)',
        'profile' : '0px 4px 19px rgba(0, 0, 0, 0.17)',
        'optionCard' : ' 0px 0px 28px rgba(0, 0, 0, 0.1)',
        'editCard' : '0px 0px 28px rgba(0, 0, 0, 0.1)'
      },
      borderRadius: {
        'card' : '30px'
      },
      fontSize: {
        'eff' : '64px'
      },
      backgroundImage: {
        'tri' : "url('../public/Vector 47.png')",
        'burger' : "url('../public/Burger.jpg')",
        'pasta' : "url('../public/Pasta.jpg')",
        'veg' : "url('../public/Veg_Restaurant.jpg')",
        'pizza' : "url('../public/Pizza.jpg')",
        'ice' : "url('../public/Ice_Cream.jpg')",
        'italian' : "url('../public/Italian_Hunt.jpg')",
        'pizzeria' : "url('../public/Pizzeria.jpg')",
        'tandoori' : "url('../public/Tandoori.jpg')",
        'momos' : "url('../public/Momos.jpg')",
        'cafe1' : "url('../public/image 18.png')",
        'cafe2' : "url('../public/image 18 (1).png')",
        'cafe3' : "url('../public/image 18 (2).png')",
        'cafe4' : "url('../public/image 18 (3).png')",
        'cafe5' : "url('../public/image 18 (4).png')",
        'cafe6' : "url('../public/image 18 (5).png')",
        'cafe1s1' : "url('../public/image 22.png')",
        'cafe1s2' : "url('../public/image 22 (1).png')",
      },
    },
  },
  plugins: [],
}
