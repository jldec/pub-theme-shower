// pub-theme-shower-ribbon pub-config

module.exports = {

  'pub-pkg': 'pub-theme-shower-ribbon',

  sources: './templates',

  generatorPlugins: './plugins/generator-plugin.js',

  staticPaths: [
    { path:'./node_modules/shower-core/shower.min.js', route:'/pub-theme-shower-ribbon' },
    { path:'./node_modules/shower-ribbon',             route:'/pub-theme-shower-ribbon' }
  ],

};
