const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/*.{js,jsx}",
    "./src/app.jsx",
    "./src/components/project components/*.{js,jsx}",
  ],
  theme: {
    extend: {
      height: ({ theme }) => ({
        leftover: `calc(100vh - 5rem)`,
      }),
      fontFamily: {
        gara: ["EB Garamond", defaultTheme.fontFamily.serif],
        mukta: ["Mukta", defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
