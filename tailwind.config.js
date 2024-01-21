/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "mobal" : 'url("https://img.freepik.com/fotos-kostenlos/fuji-berg-mit-milchstrasse-in-der-nacht_335224-104.jpg?w=900&t=st=1705820009~exp=1705820609~hmac=9ef5902e30d4f5cd927eeb52a36ffb8efa9fbfc02bcfe3a0a9d7346fa0614689")'
      },
      fontFamily:{
        roboto:"'Roboto', sans-serif"
      }
    },
  },
  plugins: [],
}

