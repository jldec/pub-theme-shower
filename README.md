# pub-theme-shower-ribbon
The [shower](https://github.com/shower/shower) theme for
[pub-server](https://github.com/jldec/pub-server) makes it easy to create
HTML presentations using markdown.

![](images/shower-screen.png)

### installation
This theme requires pub-server

```sh
npm install -g pub-server
npm install pub-theme-shower-ribbon
```


#### to watch the source and serve a preview while you edit

- create your `presentation.md` in a new directory, then:

```sh
pub -m -t shower-ribbon
```

- open your browser on http://localhost:3001/
- `-m`: interprets markdown headings as fragments
- `-t shower-ribbon` loads pub-theme-shower-ribbon if you have npm installed it.


#### to output a set of static files

```sh
pub -m -t shower-ribbon -O
```

- `-O` generates the presentation html and copies a set static files into `./out`


### sample markdown
- this sample is included in the [repo](example).
- to see the rendered presentation run `pub` in the `example` directory and point your browser to
  [](http://localhost:3001/presentation)
- to generate and then serve the static html output, use `pub -O` then run `pub` in `example/out`
- The first heading will be interpreted as a cover slide if it is followed by a markdown `![](image)`.
  Avoid putting the first heading at the top the file (or it will become the page url).
- A slide with no text (slide 2 below) will be rendered with *shout* style (large centered text)


```markdown
Intro text not included in presentation

### Title
![](/images/ice.jpg)
sub-title

### Slide 1: quote

> The overwhelming majority of theories are rejected
because they contain bad explanations, not because they
fail experimental tests.

david deutsch


### Slide 2: No text


### Slide 3: Lists

1. with with with with with with with
  - words words
  - words words
  - words words
  - words words
- nice nice nice nice nice nice


### Slide 4: Table

| col1   | col2   |     col3 header |
| ------ | ------ | --------------: |
| abc    | def    |   right aligned |
| abc    | def    |   right aligned |
| abc    | def    |   right aligned |

```


### sample `pub-config.js` configuration

Instead of command line parameters, you can use pub-config.js to configure
the theme, and say a source of images e.g. for the cover

By providing a value for `source.css` you can inject an additional
stylesheet. Remember to provide a matching static path.

```js
var opts = module.exports = {

  sources: [
    {
      path:'.',
      glob:'*.md',
      fragmentDelim:'md-headings', // pub -m
      css:'/css/extra.css'         // extra styles
    }
  ],

  staticPaths: [
    { path:'./images', route:'/images' },
    { path:'./css', route:'/css' }
  ],

  themes: 'shower-ribbon'
}
```



### credits
- [Vadim Makeev](https://github.com/pepelsbey):
  [Shower HTML presentation engine ](https://github.com/shower/shower)