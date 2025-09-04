
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",     // sky-500
        ink: "#0f172a"          // slate-900
      }
    },
  },
  plugins: [],
};
