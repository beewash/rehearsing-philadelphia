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
        small: ['1.313rem', {lineHeight: '1.625rem'}],
        normal: ['1.75rem',{lineHeight: '2.188rem'}],
        H3: ['2.625rem', {lineHeight: '3.063rem'}],
        H2: ['4rem', {lineHeight: '5rem'}],
        H1: '5.25rem'
      }
    }
  },
  variants: {
    extend: {
      flexDirection: ['odd', 'even']
    },
  },
  plugins: [
    require( 'tailwindcss' ),
    require( 'postcss' ),
    require( 'autoprefixer' ),
  ],
}
