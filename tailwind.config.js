module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './slices/**/*.js'],
  theme: {
    fontFamily: {
      sans: 'Satoshi-Regular, Arial, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
