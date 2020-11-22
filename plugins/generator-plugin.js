module.exports = function(generator) {

  var u = generator.util;
  var opts = generator.opts;
  var sources = opts.sources;
  var hb = generator.handlebars;

  hb.registerHelper('background-image', function(frame) {
    var bgImg = this['background-image'];
    if (bgImg) return renderImage(bgImg, '.cover width');
  });

  hb.registerHelper('menu', function(frame) {
    return this.menu || '=';
  });

  // mark slides with class background-image if text contains ' ".cover'
  hb.registerHelper('slideClass', function(frame) {
    if ((this['background-image'] || / "\.cover/.test(this._txt)) && !this['no-background-image']) return ' background-image';
  });

  // marked custom renderer for images - treats title text starting with . as class string
  function renderImage(href, title, text) {
    if (!/^\./.test(title)) return false; // fallback unless title starts with .
    return '<img src="' + hb.fixPath(href) + '" class="' + title.slice(1) + '" alt="' + u.escape(text || 'background image') + '">'
  }

  function renderHeading(text, level) {
    if (!/^\![+-]? /.test(text)) return false; // fallback unless heading starts with '! ' or  '!+ ' or  '!- '
    var growshrink = (/^\!\+ /.test(text) ? ' grow' : (/^\!\- /.test(text) ? ' shrink' : ''));
    return '<h' + level + ' class="shout'+ growshrink + '">' + text.slice(growshrink ? 3 : 2) + '</h' + level + '>';
  }

  generator.marked.use( { renderer: { heading:renderHeading, image:renderImage } } );
}
