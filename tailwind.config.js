module.exports = {
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'pallete1' : '#F38596',
         'pallete2' : '#8B4E82',
         'pallete3' : '#A571A5',
         'pallete4' : '#C299C2',
         'pallete5' : '#EBBFC4'
      },
      fontFamily:{
        raleway: ['Raleway']
    },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
