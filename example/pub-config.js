var opts = module.exports = {

  pkgs: ['pub-theme-shower-ribbon', 'pub-pkg-seo'],

  sources: [
    {
      path:'./markdown',
      glob:'**/*.md',
      fragmentDelim:'md-headings', // required for this theme
      writable:true
    }
  ],

  staticPaths: [ './static' ],

  // link for github badge
  github: 'https://github.com/jldec/pub-theme-shower-ribbon',

  // path to extra stylesheet
  injectCss: '/css/extra.css',

  // don't forget photo credit
  photoCredit: 'Cover Photo by Jurgen Leschner, github.com/jldec',

  // copyright comment
  copyright: 'Copyright © 2015 Hard Working Person',

  // ask search engines not to crawl this site
  noRobots: true
}
