const webpack = require('webpack');
const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCss = new ExtractTextPlugin('stylesheets/style.css');

module.exports = {
  entry: {
  	app: './src/app.js',
    vendor: ['jquery']
  },
  module: {
  	rules: [
  	  {
  	  	test: /\.js$/,
  	  	exclude: /node_modules/,
  	  	use: {
  	  	  loader: 'babel-loader',
  	  	  options: {
  	  	  	presets: ['env']
  	  	  }
  	  	}
  	  },
  	  {
  	  	test: /\.html$/,
  	  	use: ['html-loader']
  	  },
  	  {
  	  	test: /\.tpl$/,
  	  	use: ['ejs-loader']
  	  },
      {
        test: /\.(css|less)$/,
        use: extractCss.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')()
              ]
            }
          }, {
            loader: 'less-loader'
          }],
          fallback: 'style-loader'
        })
      },
  	  {
  	  	test: /\.(png|jpg|gif|svg)$/,
  	  	use: ['url-loader?limit=10000&name=assets/[name].[hash:5].[ext]', {
          loader: 'img-loader',
          options: {
            gifsicle: {
              interlaced: false
            },
            mozjpeg: {
              progressive: true,
              arithmetic: false
            },
            optipng: false,
            pngquant: {
              floyd: 0.5,
              speed: 2
            }
          }
        }]
  	  }
  	]
  },
  plugins: [
    new cleanWebpackPlugin(['dist']),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // 分离第三方库
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
      // minChunks: Infinity
    }),
    // 分理处webpack样板
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    // ["transform-runtime", {
    //   "helpers": false,
    //   "polyfill": false,
    //   "regenerator": true,
    //   "moduleName": "babel-runtime"
    // }],
    extractCss
  ]
}
