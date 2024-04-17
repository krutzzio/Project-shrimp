/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

const defaultTheme = require('tailwindcss/defaultTheme');


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        jomhuria: ['"Jomhuria"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "light": {
        colors: {
          background: "#F2F2F2"
        }
      },
      "client-theme": {
        extend: "light", // <- inherit default values from dark theme
        colors: {
          primary: {
            DEFAULT: "#FE7139",
            foreground: "#FED339",
          },
          focus: "#F182F6",
        },
      },
      "restaurant-theme": {
        extend: "light", // <- inherit default values from dark theme
        colors: {
          primary: {
            DEFAULT: "#3964fe",
            foreground: "#FED339",
          },
          focus: "#F182F6",
        },
      }
    }
  })],

}