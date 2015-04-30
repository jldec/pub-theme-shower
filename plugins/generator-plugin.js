module.exports = function(generator) {

  var u = generator.util;
  var opts = generator.opts;
  var sources = opts.sources;
  var hb = generator.handlebars;

  hb.registerHelper('extra-css', function(frame) {
    if (this._file.source.css) {
      return '<link rel="stylesheet" href="' + this._file.source.css + '">';
    }
  });

  generator.on('pages-ready', function() {

    u.each(generator.sourcePage$[sources[0].name], function(page) {

      u.each(page._fragments, function(fragment) {
        if (0 === u.trim(fragment._txt).length) {
          fragment.class = ' shout';
        }
      })

      page._fragments[0].class = ' cover';

    });

  });

}
