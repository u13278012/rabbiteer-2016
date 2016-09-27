const path = require('path');
const webpack = require('webpack');

let development = process.env.NODE_ENV !== "production";
let plugins = [];
let devtool = null;

if (development) {
  plugins = [];
  devtool = "cheap-module-eval-source-map";
} else {
  const uglify = new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  });

  plugins = [uglify];
  devtool = "cheap-module-source-map";
}

const config = {
  context: path.join(__dirname, "www"),
  entry: "./app/index",
  output: {
    path: path.join(__dirname, "www"),
    publicPath: '/',
    filename: "bundle.js"
  },
  devtool: devtool,
  plugins: plugins,
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ["style", "css", "sass?config=otherSassLoaderConfig"] }
    ]
  },
  resolve: {
    modulesDirectories: ['lib'],
    alias: {
      'angular-ui-router$': 'angular-ui-router/release/angular-ui-router.js'
    }
  },
};



module.exports = config;