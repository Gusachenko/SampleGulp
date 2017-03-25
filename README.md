# npm-gulp-automate: sample gulp + npm project structure
Automate and enhance workflow.

Setup environment:

1. Install Node.js, `test(node -v, npm -v)`;
2. `npm install gulp -g`, `test(gulp -v)`;
3. After all environment installed run: `npm install`;
4. Check work: `npm run styles`, that command should transform all `./app/styles/*.scss` to `./dist/styles/*.css` files.

### Structure

A sample project strucutre would be:

```
|-- app
|  |-- styles
|  |  |-- style_one.scss
|  |  |-- style_two.scss
|  |-- scripts
|  |  |-- script_one.js
|  |  |-- script_two.js
|  |-- images
|  |  |-- background.png
|  |-- fonts
|  |  |-- background.png
|  |-- index.html
|-- dist
|-- node_modules
```
