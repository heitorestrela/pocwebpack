var webpack = require('webpack');

var config = {
  entry: {
    app: './app/index.js',
    vendor: ['angular', 'angular-ui-router', 'oclazyload']
  },
  output: {
    path: './build',
    filename: 'bundle.js',
    chunkFilename: '[hash].[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'raw',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'ng-annotate!babel',
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
