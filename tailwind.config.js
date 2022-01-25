module.exports = {
  content: [
    "index.html"
  ],
  theme: {
    fontFamily: {
      'body'  : ['Lato', 'sans-serif'],
    },
    colors: {
      'blue'  : '#009AC6',
      'yellow': '#FEC003',
      'red'   : '#F0534D',
      'white' : '#ffffff',
      'black' : '#111111',
      'darkred' : 'rgb(186, 58, 58, 1)',
      'darkredtr' : 'rgba(186, 58, 58, 0.5)',
      'lightgrey' : 'rgba(0, 0, 0, 0.2)'
    },
    extend: {
      backgroundImage: theme => ({
        'abby': "url('/img/abby-background.png')",
        'curtis': "url('/img/curtis-background.png')",
        'taliqua': "url('/img/taliqua-background.png')",
      })
    },
  },
  plugins: [],
}
