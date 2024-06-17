const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter", sans-serif'],
      },
    },
    backgroundImage: {
      restaurant: "url('/images/restaurant.jpg')",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#FF5C01",
            },
            focus: "#FF5C01",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FF5C01",
            },
            focus: "#FF5C01",
          },
        },
      },
    }),
  ],
};
