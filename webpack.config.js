const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// path.resolve(__dirname, 'build'), 
// __ is a constance in nodejs, reference to the current working directory
const config = {
   entry: './src/index.js' ,
   output: {
       path: path.resolve(__dirname, 'build'),
       filename: 'bundle.js',
       publicPath: 'build/'
   },
   module: {
       rules: [
           {
              use: 'babel-loader',
              test: /\.js$/
           },
           {
            //   use: ['style-loader', 'css-loader'],
              use: ExtractTextPlugin.extract({
                  use: 'css-loader'
              }),
              test: /\.css$/
           },
           {
               test: /\.(jpe?g|png|gif|svg)$/,
               use: [
                   {
                       loader: 'url-loader',
                       options: { limit: 4000 }
                   },
                   'image-webpack-loader'
               ]
           }
       ]
   },
   plugins: [
        new ExtractTextPlugin('style.css')
   ]
};

module.exports = config;