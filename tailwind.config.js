/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#e13d47'
    }),
    inset: {
      '0': 0,
      auto: 'auto',
      '4': '1rem'
    },
    extend: {
      colors: {
        'primary': '#e13d47'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: [
    './**/*.html',
    './**/*.vue',
  ],
}
