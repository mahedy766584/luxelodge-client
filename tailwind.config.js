/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        goldRoss: "#B76E79",
        navyGray: "#4C4C4C",
        bgSilverGray: "#6B6978",
        navyWhite: "#6B6978",
        silver: "#C0C0C0",
        charcoal: "#333333",
        redBg: "#A4181B",
      },
      textColor: {
        goldRoss: "#B76E79",
        navyGray: "#4C4C4C",
        navyWhite: "#6B6978",
        silver: "#C0C0C0",
        charcoal: "#333333",
        redBg: "#A4181B",
      },
      borderColor: {
        goldRoss: "#B76E79",
        navyGray: "#4C4C4C",
        silver: "#C0C0C0",
        charcoal: "#333333",
        redBg: "#A4181B",
      },
      colors: {
        goldRoss: "#B76E79",
        navyGray: "#4C4C4C",
        silver: "#C0C0C0",
        charcoal: "#333333",
        redBg: "#A4181B",
      },
      fontFamily: {
        roboto: ["Roboto sans-serif"],
        poppins: ["Poppins, sans-serif"],
        lato: ["Lato, sans-serif"],
        kanit: ["Kanit, sans-serif"],
      },
    },
  },
  plugins: [],
};
