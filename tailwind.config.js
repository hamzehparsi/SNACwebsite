module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'basegreen': '#279406',
        'darkgreen': '#367701',
        'tallee': '#fdd91a',
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
      },
      borderRadius: {
        xl: '1rem',
      },
      borderWidth: {
        '1': '1px',
      },
      boxShadow: {
        custom: '0px 0px 10px -1px rgb(0 0 0 / 2%), 0 2px 7px -1px rgb(0 0 0 / 6%)'
      },
    },
  },
  variants: {
    lineHeight: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
