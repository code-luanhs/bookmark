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
      'soft-red': 'hsl(0, 94%, 66%)',
      'gray': '#a8a7ac',
      'dark-gray': '#717276'
    },
    fontSize: {
      'h1': ['2.65rem', {
        lineHeight: '1',
        letterSpacing: '0',
        fontWeight: '500',
      }],
      'h2': ['1.875rem', {
        lineHeight: '2rem',
        letterSpacing: '0',
        fontWeight: '500',
      }],
    },
    maxWidth: {
      'container': '1152px'
    }
  },
  plugins: [],
}
