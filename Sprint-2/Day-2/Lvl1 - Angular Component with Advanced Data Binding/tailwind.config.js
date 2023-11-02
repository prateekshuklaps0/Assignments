/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    screens: {
      "480px": { max: "480px" },
      "768px": { max: "768px" },
      "992px": { max: "992px" },
    },
  },
  plugins: [require("flowbite/plugin")],
};
