// Webpack configuration provided by LearnCode.academy (https://www.youtube.com/user/learncodeacademy)
const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './App/app.jsx',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
    ],
  },

  output: {
    path: `${__dirname}/Public/js/`,
    publicPath: '/js/',
    filename: 'app.min.js',
  },

  resolve: {
    alias: {
      Home: path.resolve(__dirname, 'App/Components/Home.jsx'),
      About: path.resolve(__dirname, 'App/Components/About.jsx'),
      Nav: path.resolve(__dirname, 'App/Components/Nav.jsx'),
      HeroContainer: path.resolve(__dirname, 'App/Components/HeroContainer.jsx'),
      HeroForm: path.resolve(__dirname, 'App/Components/HeroForm.jsx'),
      HeroDisplay: path.resolve(__dirname, 'App/Components/HeroDisplay.jsx'),
      HeroDisplayItem: path.resolve(__dirname, 'App/Components/HeroDisplayItem.jsx'),
      HeroDetail: path.resolve(__dirname, 'App/Components/HeroDetail.jsx'),
      MarvelAPI: path.resolve(__dirname, 'App/Api/MarvelAPI.js'),
    },
    extensions: ['.js', '.jsx'],
  },

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },

  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
