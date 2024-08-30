/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      custom: {
        darkBlue: "#6f6476", // Custom copper
        mediumBlue: "#C63C51", // Custom medium blue
        lightBlue: "#4C3E54", // Custom rich plum
        lightGray: "#F5F5DC", // Custom light gray
        copper: "#A57C65",
      },
    },
  },
  plugins: [],
};
