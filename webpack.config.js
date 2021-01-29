const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',
	module: {
		rules: [
		{
			test: '/\.js$/',
			exclude: /node-modules/,
			loaders: 'babel-loader'
		}
		]
	}
}
