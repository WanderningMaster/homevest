const REM_SIZE = 16;
const pxToRem = (px) => `${px / REM_SIZE}rem`;

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
      fontSize: {
        h1: pxToRem(64),
        h2: pxToRem(48),
        h3: pxToRem(36),
        h4: pxToRem(30),
        h5: pxToRem(24),
        h6: pxToRem(20),
        'body-large': pxToRem(18),
        body: pxToRem(16),
        'body-small': pxToRem(14),
        'placeholder-small': pxToRem(11),
        'line-14': pxToRem(14),
      },
      lineHeight: {
        h1: pxToRem(64),
        h2: pxToRem(48),
        h3: pxToRem(36),
        h4: pxToRem(40),
        h5: pxToRem(36),
        h6: pxToRem(30),
        'body-large': pxToRem(28),
        body: pxToRem(24),
        'body-small': pxToRem(21),
        'placeholder-small': pxToRem(11),
        'line-14': pxToRem(14),
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
