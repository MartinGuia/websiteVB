/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      boxShadow: {
        before: "-10px 10px 0 #FFF",
        before2: "-10px -10px 0 #FFF",
        after: "-10px 10px 0 #FFF",
        after2: "-10px 10px 0 #232949",
      },
      colors:{
        primary: "#232949",
        primaryVB: "#02457A"
      },
    },
  },
  plugins: [],
};
