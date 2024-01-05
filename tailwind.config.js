/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage : {
        'profile': "url('./assets/profile.jpg')"
      }
    },
    // screens: {
    //   'c': '1024px',
    // }
  },
  plugins: [],
}

