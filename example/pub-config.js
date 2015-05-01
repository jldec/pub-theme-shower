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
    { path:'./css', route:'/css' },
    { path:'.', glob:'*.html' }   // for testing html output
  ],

  themes: 'shower-ribbon'

}