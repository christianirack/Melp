
const webpack = require('webpack');
var path = require('path');
var src = path.resolve(__dirname, 'js/react');
const config = {
  entry: src+'/Main.jsx',
  output: {
    filename: '../react.js',
    path: src
  },
  module: {
    loaders : 
      [{
        test : /\.(js|jsx)$/,
        exclude: /node_modules/,
        include : src,
        loader : 'babel-loader'
      }]
  }
};
module.exports = config;
