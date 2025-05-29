/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FFF8E7',
          light: '#FFFDF7',
          dark: '#F5E6C8',
        },
        yellow: {
          DEFAULT: '#FFF3B0',
          light: '#FFF9E3',
          dark: '#FFD36E',
        },
        orange: {
          DEFAULT: '#FFB347',
          light: '#FFD59E',
          dark: '#FF9900',
        },
        brown: {
          DEFAULT: '#8D5524',
          light: '#C68642',
          dark: '#5C3310',
        },
        green: {
          DEFAULT: '#7BC47F',
          light: '#C8E6C9',
          dark: '#388E3C',
        },
      },
      fontFamily: {
        handwriting: ["'Zen Maru Gothic'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 