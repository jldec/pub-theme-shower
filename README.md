# pub-theme-shower-ribbon
The [shower](https://github.com/shower/shower) theme for
[pub-server](https://github.com/jldec/pub-server) makes it easy to create
HTML presentations using markdown.

Edit the markdown in any text editor and use the watch feature of pub-server to auto-update a browser preview the file is saved.

When you are ready to publish, run `pub -O` to generate a set of html output and other static files.

The screenshot below shows the built-in pub-server editor (which still has a few quirks).
![](images/shower-screen.png)

### installation
This theme requires pub-server v1.3

```sh
npm install -g pub-server
```


#### to edit a single presentation, and serve a preview while you edit

- create your `presentation.md` in a new directory, then:

```sh
npm install pub-theme-shower-ribbon

pub -m -t shower-ribbon
```

- open your browser on http://localhost:3001/
- `-m`: interprets markdown headings as fragments
- `-t shower-ribbon` loads pub-theme-shower-ribbon if you have npm installed it.

```sh
pub -m -t shower-ribbon -O
```

- `-O` generates `presentation.html` and copies the rest of the static files into `./out`
- this directory can be served by gh-pages or by running `pub -s .` in the output directory.



### to configure the theme and simplify command line usage

Use a pub-config file or make a copy of the example folder

```sh
git clone git@github.com:jldec/pub-theme-shower-ribbon.git
cp -R pub-theme-shower-ribbon/example <my-new-presentation-folder>
cd <my-new-presentation-folder>
npm init
npm install --save pub-theme-shower-ribbon
```

Now you can use `pub` and `pub -O`, instead of having to append `-m -t shower-ribbon` every time.

Replace the files in /markdown and /static/images with your own.

To customize the theme styles, you can add your own to /static/css/extra.css


### sample markdown
- this sample is included in the [repo](example).
- to see the rendered presentation run `pub` in the `example` directory
- to generate static html output, use `pub -O` 
- to serve static html output, use `pub -s .` in the `example/out` directory


- The heading at the very top the file becomes the name of the presentation (e.g. in the nav menu)
- The second heading is interpreted as a cover slide if it is followed by a markdown `![](image)`
- A slide with no text (slide 2 below) will be rendered with *shout* style (large centered text)


```markdown
# Example Presentation
Byline

## Title
![](/images/ice.jpg)
Use the nav menu to switch between presentations

## Slide 1: quote

> The overwhelming majority of theories are rejected
because they contain bad explanations, not because they
fail experimental tests.

david deutsch

## Slide 2: No text

## Slide 3: Lists

1. with with with with with with with
  - words words
  - words words
  - words words
  - words words
- nice nice nice nice nice nice

## Slide 4: Table

| col1   | col2   |     col3 header |
| ------ | ------ | --------------: |
| abc    | def    |   right aligned |
| abc    | def    |   right aligned |
| abc    | def    |   right aligned |
```


### sample `pub-config.js` configuration

Instead of command line parameters, you can use pub-config.js to configure
the theme, and say a source of images e.g. for the cover

By providing a value for `extraCss` you can inject an additional stylesheet.

```js
var opts = module.exports = {
  sources: [
  { path:'./markdown',
    glob:'**/*.md',
    fragmentDelim:'md-headings', // pub -m, required for this theme
    writable:true } ],
  staticPaths: './static',
  themes: 'shower-ribbon',

  // path to extra stylesheet
  extraCss: '/css/extra.css',

  // other config options
  github: 'https://github.com/jldec/pub-theme-shower-ribbon',
  photoCredit: 'Cover Photo by Jurgen Leschner, github.com/jldec',
  copyright: 'Copyright © 2015 Hard Working Person'
}

// *** remove below before committing to public repo ***
// ask search engines not to crawl this site
opts.noRobots = 'true';
opts.staticPaths.push('./robots.txt');
```


### credits
- [Vadim Makeev](https://github.com/pepelsbey):
  [Shower HTML presentation engine ](https://github.com/shower/shower)