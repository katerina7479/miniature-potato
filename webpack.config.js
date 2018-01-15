const webpack = require('webpack');

const path = require('path');


module.exports = {
  entry: [
    './client/app.jsx'
  ],

  output: {
    path: path.join(__dirname, '/miniature_potato/static'),
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },

  module: {
    rules: [
        {
          test: /\.css$/,
          use: [
              'style-loader',
              'css-loader'
          ]
        },
        {
          test: /\.jsx?$/,
          exclude: [
              path.resolve(__dirname, 'node_modules')
          ],
          use: [
            {
              loader: 'babel-loader',
              options: {presets: ['es2015', 'react', 'stage-2']}
            }
          ]
        }
    ]
  },

  resolve: {
    modules: [
        path.resolve(__dirname, './build'),
        "node_modules"
    ],
    alias: {
      Actions: path.resolve(__dirname, 'client/actions'),
      Components: path.resolve(__dirname, 'client/components'),
      Navigation: path.resolve(__dirname, 'client/components/navigation'),
      Reducers: path.resolve(__dirname, 'client/reducers')
    },
    extensions: ['.js', '.jsx', '.json']
  },

  plugins: [],

  devtool: 'source-map'
};
