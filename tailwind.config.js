/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage : {
        'profile': "url('https://images.unsplash.com/photo-1513152697235-fe74c283646a?q=80&w=1248&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }
    },
    // screens: {
    //   'c': '1024px',
    // }
  },
  plugins: [],
}

