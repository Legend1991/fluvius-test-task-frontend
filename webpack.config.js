'use strict'

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV || 'dev'

module.exports = {
  context: path.resolve(__dirname, './public'),
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, './public/app.js')]
  },
  output: {
    path: path.resolve(__dirname, './public/build'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {presets: ['es2015', 'react', 'stage-2']}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              options: {
                modules: true
              }
            }
          }
        ]
      }
    ]
  },
  watch: NODE_ENV === 'dev',
  watchOptions: {
    aggregateTimeout: 100
  },
  plugins: [
    new webpack.EnvironmentPlugin({'NODE_ENV': NODE_ENV}),
    new CleanWebpackPlugin(['*'], {
      root: path.resolve(__dirname, './public/build'),
      verbose: false,
      dry: false
    }),
    new BrowserSyncPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 3001,
      server: {baseDir: ['./public']}
    })
  ],
  devtool: NODE_ENV === 'dev' ? 'cheap-source-map' : undefined
}
