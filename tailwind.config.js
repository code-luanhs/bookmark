/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'blue': 'hsl(229, 8%, 60%)',
      'soft-blue': 'hsl(231, 69%, 60%)',
      'dark-blue': 'hsl(229, 31%, 21%)',
      'soft-red': 'hsl(0, 94%, 66%)'
    }
  },
  plugins: [],
}
