module.exports = {
  purge: {
    safelist: [
      'hover:bg-solo-yellow'
    ]
  },
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
        cfsSM: ['1.313rem', {lineHeight: '1.8rem'}],
        cfs: ['1.75rem',{lineHeight: '2.5rem'}],
        cfsL: ['2.625rem', {lineHeight: '3.063rem'}],
        cfsXL: ['4rem', {lineHeight: '5rem'}],
        cfs2XL: '5.25rem'
      },
      colors: {
        'solo-yellow': '#FFC20E',
        'duet-red': '#ED1C24',
        'ensemble-blue': '#000F9F',
        'orchestra-green': '#009245',
        'that-gray': '#DADADA'
      },
      gridTemplateColumns: {
        '150': 'repeat(auto-fill, 150px)',
        '100': 'repeat(auto-fill, 100px)'
      },
      height: {
        '24.5': '6.25rem',
        '36.5': '9.375rem',
        'm-80' : 'calc(-80px + 100vh)'
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
