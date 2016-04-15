var webpack = require('webpack');

var config = {
  entry: {
    app: './app/index.js',
    vendor: ['angular', 'angular-ui-router', 'oclazyload', 'bootstrap-webpack!./config/bootstrap.config.js', 'angular-ui-bootstrap']
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
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=./fonts/[name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=./fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=./fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  ]
};

module.exports = config;
