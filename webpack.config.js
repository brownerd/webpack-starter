var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer');
var pixrem = require('pixrem');
var pseudoelements = require('postcss-pseudoelements')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      //https://webpack.github.io/docs/webpack-dev-server.html
      //path: path.resolve(__dirname, "public"), //Path to build, public or dist
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
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader',
        exclude: /node_modules/
      },
      // Load images
      {
        test: /\.jpg/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.gif/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.png/, loader: "url-loader?limit=10000&mimetype=image/png"
      },
      {
        test: /\.svg/,
        loader: "url-loader?limit=10000&mimetype=image/svg"
      },

      // Load fonts
      {
        test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  postcss: function () {
    return [
      autoprefixer({ browsers: ['ie >= 8', 'ie_mob >= 10', 'ff >= 3.6', 'chrome >= 10', 'safari >= 5.1', 'opera >= 11', 'ios >= 7', 'android >= 4.1', 'bb >= 10'] }),
      pixrem,
      pseudoelements
    ];
  },
  debug: true
};
