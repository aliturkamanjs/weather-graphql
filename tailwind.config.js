/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        darkwhite: "url('./src/assets/black&white.jpg')",
        desert: "url('./src/assets/desert.jpg')",
        forest: "url('./src/assets/forest.jpg')",
        moon: "url('./src/assets/moon.jpg')",
        rain: "url('./src/assets/rain.jpg')",
        dark: "url('./src/assets/dark.png')",
      },
    },
  },
  plugins: [],
}
