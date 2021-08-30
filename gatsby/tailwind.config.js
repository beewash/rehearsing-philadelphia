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
        tiny: ['1rem', {lineHeight: '1.5rem'}],
        H5: ['1.313rem', {lineHeight: '1.625rem'}],
        small: ['1.313rem', {lineHeight: '1.625rem'}],
        normal: ['1.75rem',{lineHeight: '2.188rem'}],
        H3: ['2.625rem', {lineHeight: '3.063rem'}],
        H2: ['4rem', {lineHeight: '5rem'}],
        H1: '5.25rem'
      },
      colors: {
        'solo-yellow': '#FFC20E',
        'duet-red': '#ED1C24',
        'ensemble-blue': '#000F9F',
        'orchestra-green': '#009245',
      }
    }
  },
  variants: {
    extend: {
      flexDirection: ['odd', 'even', 'first', 'last'],
      width: ['first', 'last']
    },
  },
  plugins: [
    require( 'tailwindcss' ),
    require( 'postcss' ),
    require( 'autoprefixer' ),
  ],
}
