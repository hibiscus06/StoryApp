/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      custom: {
        darkBlue: "#522258", // Custom dark blue
        mediumBlue: "#C63C51", // Custom medium blue
        lightBlue: "#8C3061", // Custom light blue
        lightGray: "#FFDFD6", // Custom light gray
      },
    },
  },
  plugins: [],
};
