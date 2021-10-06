module.exports = {
  purge:  ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      '0.5': '4px',
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#0d0c20',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}