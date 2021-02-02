const colors = require("tailwindcss/colors")
const theme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  //purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans':['Inter', ...theme.fontFamily.sans]
    },
    maxHeight : {
      '416p' : "450px"
    },
    colors: {
      ...colors,
      pink : {
        light : colors.pink[100],
        dark : colors.pink[800]
      },

      green : {
        light : colors.emerald[50],
        normal : colors.emerald[500],
        dark : colors.emerald[900]
      }
    },
    extend: {
      ringWidth: ['hover']
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
