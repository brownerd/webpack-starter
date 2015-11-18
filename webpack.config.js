var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      publicPath: '/',
      filename: 'main.js'
  },
  devServer: {
    contentBase: "./src/"
  },
  devtool: 'source-map',
  // 'eval-source-maps'
  // 'inline-source-map'
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        //exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015"],
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'src'),
        loader: 'style-loader!css-loader!stylus-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woof$|\.ttf$|\.otf$|\.eot$/,
        loader: 'url-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  debug: true
};
