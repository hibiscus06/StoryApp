/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      custom: {
        darkBlue: "rgb(32, 30, 67)", // Custom dark blue
        mediumBlue: "rgb(19, 75, 112)", // Custom medium blue
        lightBlue: "rgb(80, 160, 155)", // Custom light blue
        lightGray: "rgb(238, 238, 238)", // Custom light gray
        lightBlueHover: "rgb(145, 204, 219)",
        navyBlue: "rgb(65,105,225)",
      },
    },
  },
  plugins: [],
};
