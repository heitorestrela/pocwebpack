var webpack = require('webpack');

var config = {
  entry: {
    app: './app/index.js'/*,
    vendor: ['angular']*/
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  }
  /*plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  ]*/
};

module.exports = config;
