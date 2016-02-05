var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, '/public');
var APP_DIR = path.join(__dirname, '/src');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    // 'webpack-hot-middleware/client?http://localhost:3000',
    'webpack/hot/only-dev-server', // WebpackDevServer host and port
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module : {
    loaders : [ 
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        loaders : [
          'react-hot', 
          'babel'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  }
};

module.exports = config;


