const path = require('path');
const webpack = require('webpack');

const uglify = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
})

const config = {
  context: path.join(__dirname, "www/app"),
  entry: "./index",
  output: {
    path: path.join(__dirname, "www"),
    publicPath: '/',
    filename: "bundle.js"
  },
  devtool: "source-map",
  plugins: [
    uglify
  ],
  resolve: {
    modulesDirectories: ['lib'],
    alias: {
      'angular-ui-router$': 'angular-ui-router/release/angular-ui-router.js'
    }
  },
};



module.exports = config;