module.exports = function(generator) {

  var u = generator.util;
  var opts = generator.opts;
  var sources = opts.sources;
  var hb = generator.handlebars;

  hb.registerHelper('menu', function(frame) {
    return this.menu || '=';
  });

  hb.registerHelper('body-attr', function(frame) {
    return this['body-attr'] ||
      'class="list ' + u.escape(u.slugify(this._href.slice(1))) + '"'
  });

  hb.registerHelper('extra-css', function(frame) {
    if (this._file.source.css) {
      return '<link rel="stylesheet" href="' +
        u.relPath(this._href) +
        this._file.source.css + '">';
    }
  });

  generator.on('pages-ready', function() {

    u.each(generator.sourcePage$[sources[0].name], function(page) {

      u.each(page._fragments, function(fragment) {
        if (0 === u.trim(fragment._txt).length) {
          fragment.class = ' shout';
        }
      })

      var first = page._fragments && page._fragments[0];

      if (first && /^\!\[/m.test(first._txt)) {
        page._fragments[0].class = ' cover';
      }

    });

  });

}
