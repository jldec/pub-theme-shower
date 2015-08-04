module.exports = function(generator) {

  var u = generator.util;
  var opts = generator.opts;
  var sources = opts.sources;
  var hb = generator.handlebars;
  var renderImg = generator.renderer.image;

  // apply page-mutations to pages from non-package sources
  generator.on('pages-ready', function() {

    u.each(sources, function(source) {
      if (source._pkg) return;

      u.each(generator.sourcePage$[source.name], function(page) {

        // if no text below markdown heading use 'shout' class
        u.each(page._fragments, function(fragment) {
          if (fragment['background-image']) {
            fragment.class = (fragment.class || '') + ' background-image';
          }
          if (0 === u.trim(fragment._txt.replace(/^.*$/m,'')).length) {
            fragment.class = (fragment.class || '') + ' shout';
          }
        });

        // if first slide contains an image, use 'cover' class
        var first = page._fragments && page._fragments[0];
        if (first && /^\!\[/m.test(first._txt)) {
          page._fragments[0].class = (page._fragments[0].class || '') + ' cover';
        }

      });
    });
  });

  hb.registerHelper('background-image', function(frame) {
    var bgImg = this['background-image'];
    if (bgImg) return renderImg(bgImg, 'full=1', '');
  });

  hb.registerHelper('menu', function(frame) {
    return this.menu || '=';
  });

}
