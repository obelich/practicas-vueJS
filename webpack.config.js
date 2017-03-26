// webpack.config.js
const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.resolve(__dirname, 'js'),
  entry:  {
    introduccion_componentes: './introduccion_componentes.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', { "loose": true, "modules": false }], 'stage-2'],
          plugins: ['transform-runtime'],
          comments: false
        }
      }]
    }]
  }
}

module.exports = config;