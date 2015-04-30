var opts = module.exports = {

  sources: [
    {
      path:'.',
      glob:'*.md',
      fragmentDelim:'md-headings', // pub -m
      css:'/css/extra.css',        // extra styles
      writable:true
    }
  ],

  staticPaths: [
    { path:'./images', route:'/images' },
    { path:'./css', route:'/css' }
  ],

  themes: 'shower-ribbon'

}