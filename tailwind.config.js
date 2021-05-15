const plugin = require("tailwindcss/plugin");

module.exports = {
  // mode: "jit",
  // purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#f0f0f0  ",
      secondary: "#c2c2c2",
      secondaryLight: "#e8e8e8",
      primaryDark: "#38383d",
      primaryGreen: "#517a4b",
      secondaryTan: "#c8bc80",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#2b2b2b",
      secondary: "#517a4b",
      tertiary: "#c8bc80",
      primaryDark: "#f0f0f0",
    }),
    extend: {
      colors: {
        primary: "#517a4b",
        secondary: "#c8bc80",
        textPrimary: "#",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.4xl"),
          fontFamily: theme("fontFamily.mono"),
        },
        h2: { fontSize: theme("fontSize.2xl") },
        h3: { fontSize: theme("fontSize.xl") },
      });
    }),
    require("@tailwindcss/forms"),
  ],
};
