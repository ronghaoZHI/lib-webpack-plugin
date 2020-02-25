
<h2 align="center">Install</h2>

```bash
  npm i --save-dev lib-webpack-plugin
```

```bash
  yarn add --dev lib-webpack-plugin
```

---

<h2 align="center">Usage</h2>

**webpack.config.js**
```js
const LibWebpackPlugin = require('lib-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const libs = [{
	name: "lib.js",
	version: "1.0.1",
	publicPath: "http://xxx.com"
}]

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(), 
    new LibWebpackPlugin(libs)
  ]
}
```
tips: you can use ```LibWebpackPlugin```  in ``` vue/cli``` or ```react/cli```  directly,  because the cli has include ``` html-webpack-plugin ```

This will generate a file `dist/index.html` containing the following


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  </head>
  <body>
		<script src="index_bundle.js"></script>
    <script src="http://xxx.com/1.0.1/lib.js"></script>
  </body>
</html>
```
