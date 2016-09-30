# www
This is the root folder of the website. All files in this folder are accessible from the
internet.

`index.html` is the default file and will be served when hitting the website without a path.

## Contents
As with the server, some of the files in this folder are *compiled*.

| File | Compiled | What |
|------|----------|------|
| `bundle.js` | **yes** | All the javascript for the site squashed together into one file. |
| `bundle.js.map` | **yes** | Tells chrome how to debug javascript. |
| `index.html` | no | The default html file. |
| `jsconfig.js` | no | Tells VS Code what kind of javascript to expect. | 
| `main.css` | **yes** | The main css file. Compiled from `styles/main.scss`. |
| `main.css.map` | **yes** | Tells Chrome how to debug css. |
| `typings.json` | no | Tells [Typings](https://github.com/typings/typing) which typings to install. |

Here is a summary of the various folders and what you can expect from them

| Folder | Type | What |
|--------|------|------|
| `app` | Javascript | Contains the javascript source for the clientside single page application. |
| `lib` | Javascript/CSS | Contains various libraries needed by the clientside web page. Downloaded with [Bower](https://bower.io/). |
| `styles` | (Sass)[http://sass-lang.com/] | Contains the styles for the site. The `main.scss` file is compiled into `main.css` so any new files need to be included by `main.scss`. |
| `typings` | Typescript | Contains the *typings* for clientside. These files are used by VS Code to know how to do intellisense for clientside javascript. |