// to clone this example:
// npm install the theme and
// and replace '..' below with themes: 'pub-theme-shower-ribbon'

var opts = module.exports = {

  sources: [
    {
      path:'.',
      glob:'*.md',
      fragmentDelim:'md-headings', // pub -m, required for this theme
      css:'/css/extra.css',        // extra styles
      writable:true
    }
  ],

  staticPaths: [
    { path:'./images', route:'/images' },
    { path:'./css',    route:'/css' }
  ],

  themes: '..'

}