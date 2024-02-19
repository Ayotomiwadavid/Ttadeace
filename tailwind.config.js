/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'overallBg': "#f0f4fa",
        'logo-color' : '#252c47',
        'small-text-color': '#8397e8',
        'blue-text-color': '#3555da',
        'neon-blue': 'hsl(227, 100%, 56%)',
      },
    },
  },
  plugins: [],
}