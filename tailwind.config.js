/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage : {
        'profile': "url('./assets/profile.jpg')"
      }
    },
    screens: {
      'md': '720px',
      'sm': '580px',
      'lg': '1024px',
    }
  },
  plugins: [],
}

