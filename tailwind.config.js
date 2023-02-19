/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "26px",
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',

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
