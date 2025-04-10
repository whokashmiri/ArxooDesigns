/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // custom off-white background color
        offwhite: "rgba(246, 247, 249, 1)",
        ivory: "#FFFFF0",
        cream:  "#F6F1EB",

      },
    },
  },
  plugins: [],
}
