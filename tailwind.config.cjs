/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        lightBlue: "#1d242c",
        darkBlue: "#16191e",
        darkTextColor: "#8e9196",
        darkTitle: "#e9e9e9",
        darkSongname: "#ffffffd6",
        skyBlue: "#007aff",
      },
      screens: {
        xxs: "325px",
      },
    },
  },
  plugins: [],
};
