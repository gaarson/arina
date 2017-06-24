const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: {
		js: [
			'babel-polyfill', path.join(__dirname, 'client/app.js')
		]
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: [/\.js$/, /\.jsx$/], loader: 'babel-loader', exclude: /node_modules/ }
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify('production') }
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: true
			}
		})
	]
}
