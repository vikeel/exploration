const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  devtool: 'inline-source-map',
  devServer: {
  	contentBase: path.resolve(__dirname, '../dist'),
  	hot: true,
  	inline: false,
    port: 1337,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
  	filename: '[name].js',
  	path: path.resolve(__dirname, '../dist'),
  	// publicPath: '/'
  }
});
