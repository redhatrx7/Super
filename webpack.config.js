const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'home': ['./src/home/home.js'],
		'test': ['./src/test/test.js']
	},
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'vendor/codeigniter4/framework/public/assets/js'),
		filename: '[name].bundle.js',
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(sass|scss|css)$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=../fonts/[name].[ext]'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({ // define where to save the file
			filename: '../css/[name].bundle.css',
			allChunks: true,
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			Popper: 'popper.js',
			Tether: 'tether',
			'window.jQuery': 'jquery',
			React: 'react',
			ReactDOM: 'react-dom'
		})
	]
}