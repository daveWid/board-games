var webpack = require('webpack');

module.exports = {
  entry: './lib',
  output: {
    path: './build/assets/',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  }
};
