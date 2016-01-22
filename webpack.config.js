const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-maps',
  entry: [
    './index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname),
    }],
  },
};