const { yearsToMonths } = require('date-fns');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        acuminPro: ['Acumin Pro', 'sans-serif'],
        sainteColombe: ['Sainte Colombe', 'serif']
      },
      fontSize: {
        cfsSM2: ['0.875rem', {lineHeight: '1.25rem'}],
        cfsSM1: ['1rem', {lineHeight: '1.5rem'}],
        cfsSM: ['1.313rem', {lineHeight: '2rem'}],
        cfs: ['1.75rem',{lineHeight: '2.5rem'}],
        cfsL: ['2.625rem', {lineHeight: '3.063rem'}],
        cfsXL: ['4rem', {lineHeight: '5.5rem'}],
        cfs2XL: ['5.25rem', {lineHeight: '7rem'}]
      },
      colors: {
        'solo-yellow': '#FFC20E',
        'duet-red': '#ED1C24',
        'ensemble-blue': '#000F9F',
        'orchestra-green': '#009245',
        'that-grey': '#dadada'
      },
      gridTemplateColumns: {
        '150': 'repeat(auto-fill, 150px)',
        '100': 'repeat(auto-fill, 100px)'
      },
      height: {
        '24.5': '6.25rem',
        '36.5': '9.375rem',
        '148': '37rem',
        'm-80' : 'calc(-80px + 100vh)'
      }
    }
  },
  variants: {
    extend: {
      flexDirection: ['odd', 'even', 'first', 'last'],
      width: ['first', 'last'],
      textAlign: ['odd', 'even'],
      textColor: ['odd', 'even'],
      margin: ['last']
    },
  },
  plugins: [
    require( 'tailwindcss' ),
    require( 'postcss' ),
    require( 'autoprefixer' ),
  ],
}
