/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#3DBEFF",
        "active-blue": "#6FCFFF",
        "graphic-design": "#25564b",
        icon: "#2C7566",
      },
      screens: {
        desktop: "1180px",
        phone: { min: "300px", max: "685px" },
      },
      fontFamily: {
        barlow: "Barlow",
        fraunces: "Fraunces",
      },
      fontSize: {
        card: "10px",
      },
    },
  },
  plugins: [],
};
