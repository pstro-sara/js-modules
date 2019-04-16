const path = require('path');
// path.resolve(__dirname, 'build'), 
// __ is a constance in nodejs, reference to the current working directory
const config = {
   entry: './src/index.js' ,
   output: {
       path: path.resolve(__dirname, 'build'),
       filename: 'bundle.js'
   },
   module: {
       rules: [
           {
              use: 'babel-loader',
              test: /\.js$/
           },
           {
              use: ['style-loader', 'css-loader'],
              test: /\.css$/
           }
       ]
   }
};

module.exports = config;