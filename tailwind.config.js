/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "xlg": "1200px",
      "1166px": "1166px",
      "slg": "1000px",
      "990px": "990px",
      "820px": "820px",
      "690px": "690px"
    }
  },
  plugins: [],
}

