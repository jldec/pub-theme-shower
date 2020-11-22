// pub-theme-material pub-config

module.exports = {

  'pub-pkg': 'pub-theme-shower',

  sources: './templates',

  generatorPlugins: './plugins/generator-plugin.js',

  staticPaths: [
    { path:'./node_modules/@shower/core/dist/shower.js', route:'/js', inject:true },
    { path:'./node_modules/@shower/core/LICENSE.md',     route:'/shower'},
    { path:'./node_modules/@shower/ribbon',              route:'/ribbon' },
    { path:'./node_modules/@shower/material',            route:'/material' },
    { path:'./css/pub-theme-shower.css',                 route:'/css', inject:true }
  ],

};
