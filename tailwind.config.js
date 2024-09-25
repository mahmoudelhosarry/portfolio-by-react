/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#fff",
        backgroundColor: "#18181b",
        accent: "#252529",
        hover: "#2dc7b4",
        border: "#232326",
      },
      transformOrigin: {
        "top-left-1/3-3/4": "33% 75%",
      },
    },
  },
  plugins: [],
};
