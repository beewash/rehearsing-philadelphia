const { yearsToMonths } = require('date-fns');

module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.css',
    './src/**/*.html'
  ],
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
        'that-grey': '#dadada',
        'solo': '#FFC20E',
        'duet': '#ED1C24',
        'ensemble': '#000F9F',
        'orchestra': '#009245'
      },
      gridTemplateColumns: {
        '150': 'repeat(auto-fill, 150px)',
        '100': 'repeat(auto-fill, 100px)'
      },
      height: {
        '24.5': '6.25rem',
        '36.5': '9.375rem',
        '148': '37rem',
        'm-174' : 'calc(-174px + 100vh)',
        'm-80' : 'calc(-80px + 100vh)'
      },
      minHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '400': '25rem'
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '400': '25rem'
      },
      maxWidth: {
        '32.5': '8.125rem'
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
    require( '@tailwindcss/line-clamp' )
  ],
}
