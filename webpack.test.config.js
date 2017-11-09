const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.js');

module.exports = merge( common, {
	devtool: 'cheap-module-source-map',
	output:
	{
		filename: './js/[name].test.js',
	},
	plugins:
	[
  		new webpack.DefinePlugin(
  		{
  			 'process.env':
  			 {
  				 'NODE_ENV': JSON.stringify('testing')
  			 }
  		}),
  		new UglifyJSPlugin({
  			 sourceMap: true
  		}),
  		new ExtractTextPlugin({ // define where to save the file
			filename: './css/[name].test.css',
			allChunks: true
		})
	]
} );