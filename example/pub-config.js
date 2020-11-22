var opts = module.exports = {

  // to use this in a directory not inside pub-theme-shower
  // create package.json which loads the theme, and replace '..' below with
  // 'pub-theme-shower'
  pkgs: ['..', 'pub-pkg-seo'],

  sources: [
    { path:'markdown/index.md', fragmentDelim:'md-headings', writable:true },
    { path:'markdown/presentation-2.md', writable:true }
  ],

  outputs: [
    { path: '../docs',
      relPaths: true }
    ],

  staticPaths: [ './static' ],

  // link for github badge
  github: 'https://github.com/jldec/pub-theme-shower',

  // path to extra stylesheet
  injectCss: '/css/extra.css',

  // don't forget photo credit
  photoCredit: 'Cover Photo by Jurgen Leschner, github.com/jldec',

  // copyright comment
  copyright: 'Copyright © 2015 Hard Working Person',

  // ask search engines not to crawl this site
  noRobots: true,

  // disable jquery and pub editor
  noEditor: true,
  jquery: false
}
