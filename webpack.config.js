const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports =
{
	entry:
	{
		'home': ['./src/home/home.js'],
		'admin': ['./src/admin/admin.js']
	},
	output:
	{
		path: path.resolve(__dirname, 'vendor/codeigniter4/framework/public/assets'),
		filename: './js/[name].dev.js',
	},
	module:
	{
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query:
				{
					presets: ['env', 'react']
				}
			},
			{
				test: /\.(sass|scss|css)$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=./fonts/[name].[ext]'
			}
		]
	},
	plugins:
	[
		new webpack.ProvidePlugin(
		{
			$: 'jquery',
			jQuery: 'jquery',
			Popper: 'popper.js',
			Tether: 'tether',
			'window.jQuery': 'jquery',
			React: 'react',
			ReactDOM: 'react-dom'
		} ),
		new WebpackCleanupPlugin({
		
		})
	]
}