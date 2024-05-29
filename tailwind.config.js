/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4A69FF', 
        darkblue1:'#12235B',
        darkblue2:'#162E82',
       
      },
    },
  },
  plugins: [],
};
