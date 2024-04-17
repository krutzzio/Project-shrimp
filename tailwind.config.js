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
      "client-theme": {
        extend: "light", // <- inherit default values from dark theme
        colors: {
          background: "#0D001A",
          foreground: "#ffffff",
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
          background: "#0D001A",
          foreground: "#ffffff",
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