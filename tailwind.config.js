export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#1FB6B2',
          deep: '#148C88',
        },
        coral: {
          primary: '#FF6B5A',
          muted: '#E05A4C',
        },
        background: {
          dark: '#0E0F12',
          card: '#181A1F',
          divider: '#262A33',
        },
        text: {
          primary: '#E6E7EB',
          secondary: '#9DA3AE',
        },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "'Roboto'", "'Oxygen'", "'Ubuntu'", "'Cantarell'", "'Fira Sans'", "'Droid Sans'", "'Helvetica Neue'", "sans-serif"],
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
