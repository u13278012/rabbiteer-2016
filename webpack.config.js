const path = require('path');
const webpack = require('webpack');

const uglify = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
})

const config = {
  context: path.join(__dirname, "www"),
  entry: "./app/index",
  output: {
    path: path.join(__dirname, "www"),
    publicPath: '/',
    filename: "bundle.js"
  },
  devtool: "source-map",
  plugins: [
    uglify
  ],
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