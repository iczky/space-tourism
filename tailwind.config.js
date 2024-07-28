/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "planet-blue-300": "#D0D6F9",
      "planet-blue-900": "#0B0D17",
    },
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
      },
      fontSize: {
        '9xl': '144px',
        '8xl': '100px',
        '6xl': '56px',
        '4xl': '32px',
        '2xl': '28px',
      },
      letterSpacing: {
        'normal': '0px'
      }
    },
  },
  plugins: [],
}
