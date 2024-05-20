/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
