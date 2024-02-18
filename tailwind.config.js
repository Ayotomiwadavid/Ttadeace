/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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