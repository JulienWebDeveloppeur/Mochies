const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: true,
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: "#393CCC",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: "#0ff",
      yellow: colors.yellow,
      grey: colors.gray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"), // import tailwind forms
  ],
};
