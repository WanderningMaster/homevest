/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const REM_SIZE = 16
const pxToRem = px => `${px / REM_SIZE}rem`
const colors = require('./src/config/colors.json')

module.exports = {
  important: '#root',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      spacing: {
        128: '32rem',
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
        '20px': pxToRem(20),
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
      },
      padding: {
        '10px': pxToRem(10),
        '75px': pxToRem(75),
      },
      margin: {
        '2px': pxToRem(2),
        '10px': pxToRem(10),
        '62px': pxToRem(62),
      },
      width: {
        '295px': pxToRem(295),
      },
      boxShadow: {
        header: '0px 4px 18px rgba(34, 68, 68, 0.15)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
