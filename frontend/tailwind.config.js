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
        '6.5': pxToRem(26),
        '7.5': pxToRem(30),
        '15': pxToRem(60),
        '19': pxToRem(76),
        '27': pxToRem(108),
        '46.5': pxToRem(186),
        '83.5': pxToRem(334),
        '90': pxToRem(360),
        '102.5': pxToRem(410),
        '128': '32rem',
        '157.5': pxToRem(630),
        '233': pxToRem(932),
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
      },
      screens: {
        '3xl': '1920px', // full hd
        '4xl': '2560px', // quad hd
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
        'map-card': '0px 4px 18px 0 rgba(0, 0, 0, 0.15)',
        google: '0 4px 18px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
