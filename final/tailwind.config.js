module.exports = {
  mode: 'jit',
  purge: [
    './public/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aorc: {
          bg: '#f8fbff',
          blue: '#0010de',
          banafsh: '#797e9c',
          lightblue: '#03caf4'
        },
        'basegreen': '#279406',
        'darkgreen': '#367701',
        'tallee': '#fdd91a',
      },
      boxShadow: {
        myShadowBox: '0px 16px 20px 0px #c3d1dc21'
      },
      fontSize: {
        'xxs': '.6rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
