module.exports = {
  content: ["./src/components/*.{js,jsx}", "./src/app.jsx"],
  theme: {
    extend: {
      height: ({ theme }) => ({
        leftover: `calc(100vh - 5rem)`,
      }),
    },
  },
  plugins: [],
};
