/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#075E54"
      },
      textColor: {
        primary: "#075E54"
      }
    },
  },
  plugins: [],
}