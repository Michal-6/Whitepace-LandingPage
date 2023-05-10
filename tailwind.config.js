/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'DMSans': ['DM Sans', 'sans-serif'],
      'InterRegular': ['Inter', 'sans-serif'],
      'InterMedium': ['Inter', 'sans-serif'],
      'InterSemiBold': ['Inter', 'sans-serif'],
      'InterBold': ['Inter', 'sans-serif'],
    },

    fontSize: {
      '72px': '72px',
      '64px': '64px',
      '54px': '54px',
      '36px': '36px',
      '28px': '28px',
      '24px': '24px',
      '18px': '18px',
      '16px': '16px',
    },

    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1152px',
      // => @media (min-width: 1152px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1400px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },

    spacing: {
      '824px': '824px',
      '691px': '691px',
      '685px': '685px',
      '656px': '656px',
      '562px': '562px',
      '549px': '549px',
      '526px': '526px',
      '456px': '456px',
      '368px': '368px',
      '350px': '350px',
      '300px': '300px',
      '220px': '220px',
      '200px': '200px',
      '191px': '191px',
      '140px': '140px',
      '134px': '134px',
      '100px': '100px',
      '92px': '92px',
      '88px': '88px',
      '80px': '80px',
      '75px': '75px',
      '60px': '60px',
      '44px': '44px',
      '42px': '42px',
      '40px': '40px',
      '34px': '34px',
      '32px': '32px',
      '29px': '29px',
      '28px': '28px',
      '25px': '25px',
      '24px': '24px',
      '23px': '23px',
      '20px': '20px',
      '19px': '19px',
      '16px': '16px',
      '15px': '15px',
      '13px': '13px',
      '10px': '10px',
      '9px': '9px',
      '6px': '6px',
      '4px': '4px',
      '0px': '0px',
      'auto': 'auto',
      '50%': '50%',
    },

    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary1': '#043873',
        'primary2': '#4F9CF9',
        'secondary1': '#FFE492',
        'secondary2': '#A7CEFC',
        'secondary3': '#FFFFFF',
        'secondary4': '#212529',
        'black': '#212529',
    },

    extend: {
      backgroundPosition: {
        'left230px': 'left 230px',
        'left-130px': 'left 130px',
        'leftbottom50px': 'left top 50px',
      },
      borderRadius: {
        '18px': '18px',
        '10px': '10px',
      },
      boxShadow: {
        'client-shadow': '15px 10px 50px rgba(0, 0, 0, 0.1)',
        'plan-shadow': '0px 4px 50px rgba(0, 0, 0, 0.08)',
      },
    },

    backgroundImage: {
      'hero-element': "url('././Images/Element1.png')",
    },

    lineHeight: {
      '77px': '77px',
      '44px': '44px',
    },
  },
  plugins: [],
}
