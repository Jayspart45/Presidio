/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        Roboto: ["Roboto"],
        Monst: ["Montserrat"]
      }
      , colors: {
        color1: "#1E1E24",
        color2: "#191919",
        color3: "#0057ff",
        color4: "#92140C",
        color5: "#FFCF99",

      }
    },
  },
  plugins: [],
}