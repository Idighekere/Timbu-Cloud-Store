/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        "primary": '#F1F4F6',
        "secondary": '#F2F2F2',
        "primary-two": '#97dd0c',
        "secondary-two": "#056835",
        "text": "#232323",
        "outline": "#009646",
        "white": "#fff",
        "neutral-black": "#1f2a37",
        "black": "#000",
      },
    },
  },
  plugins: [],
}