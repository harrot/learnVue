let path = require('path');
let webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [

      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'  // Resolving the vue var for standalone build
    },
    extensions: ['*', '.js', '.vue', '.json'] // import statement can use file name without file ext.
	}
};