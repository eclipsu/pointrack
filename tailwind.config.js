/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "gully-regular": ["Gully-Regular"],
        "gully-bold": ["Gully-Bold"],
        "gully-thin": ["Gully-Thin"],
        "gully-light": ["Gully-Light"],
      },
    },
  },
  plugins: [],
};
