/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0E0F12',
        charcoal: '#181A1F',
        teal: '#1FB6B2',
        'teal-dark': '#148C88',
        coral: '#FF6B5A',
        'coral-muted': '#E05A4C',
        'text-primary': '#E6E7EB',
        'text-secondary': '#9DA3AE',
        divider: '#262A33',
      },
    },
  },
  plugins: [],
}
