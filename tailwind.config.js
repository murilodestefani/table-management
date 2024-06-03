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
      height: {
        custom: "calc(896px - 133px)",
      },
      fontFamily: {
        inter: ['"Inter", sans-serif'],
      },
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
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FF5C01",
            },
          }
        }
      },
    }),
  ],
};
