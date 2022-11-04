/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {},
    screens: {
      xs: "512px", // -128↓
      ss: "640px", 
      sm: "768px", // -256↓
      md: "1024px",
      lg: "1280px",
      xl: "1536px", 
      },
  },
  plugins: [],
}
