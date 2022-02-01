module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grey': '#93A3BC',
        'green': '#244D4D',
        'orange': '#BA5A31',
        'light-grey': '#CDD4E0',
        'red': '#F44E3F',
        'green-hover': '#3B7D7D',
        'background': '#FBF9F9',
        'light-blue': '#5E7497',
        'light-grey-2': '#E6E9EF',
        'white': '#FFFFFF',
        'green-pressed': '#142A2A',
        'green-inactive': '#BDCACA',
        'black': '#202020',
        'hovered': '#5E7497', 
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
