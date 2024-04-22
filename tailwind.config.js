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
          background: "#F2F2F2",
          bgcolor: "#F2F2F2"
        }
      },
      "client-theme": {
        extend: "light", // <- inherit default values from dark theme
        colors: {
          primary: {
            50: "#FF7C03",
            DEFAULT: "#FE7139",
            foreground: "#FED339",
          },
          focus: "#F182F6",
          secondary: {
            50: "#6183FE",
            DEFAULT: "#3964FE",
            foreground: "#FED339",
          },
        },
      },
      "restaurant-theme": {
        extend: "light", // <- inherit default values from dark theme
        colors: {
          primary: {
            50: "#6183FE",
            DEFAULT: "#3964fe",
            foreground: "#FED339",
          },
          focus: "#F182F6",
        },
      }
    }
  })],

}