const path = require('path');

module.exports = {
  context: __dirname,
  devtool: 'cheap-module-eval-source-map',
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

};
