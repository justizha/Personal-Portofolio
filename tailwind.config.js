/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "26px",
    },
    
    extend: {
      colors: {
        primary: "#0d9488",
        dark: "#0f172a",
        like: "#FF0066",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
