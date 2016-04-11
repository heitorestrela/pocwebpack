var webpack = require('webpack');

var config = {
  entry: {
    app: './app/index.js',
    vendor: ['angular', 'angular-ui-router']
  },
  output: {
    path: './build',
    filename: 'bundle.js',
    chunkFilename: '[hash].[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'raw'
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
