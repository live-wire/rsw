var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './js/main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
         { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
         { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
                ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };