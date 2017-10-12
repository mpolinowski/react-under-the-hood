const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3000,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'json-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'style-loader!css-loader!postcss-loader!sass-loader'
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist/assets/'),
    filename: 'bundle.js',
    publicPath: 'assets'
  },
};
