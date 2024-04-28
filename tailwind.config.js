/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bringhtColor: "#F4511F",
        backgroundColor: "#b7nca9",
        lightText: "#959595",
      },
    },
  },
  plugins: [],
};
