/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}