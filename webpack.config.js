var webpack = require('webpack');

var config = {
  entry: {
    app: './app/index.js',
    vendor: ['angular']
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'raw',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  ]
};

module.exports = config;
