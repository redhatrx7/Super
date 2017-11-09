const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.config.js')

module.exports = merge(common,
{
	devtool: 'source-map',
	output: {
		filename: './js/[name].dev.js',
	},
	plugins: [
	new ExtractTextPlugin({ // define where to save the file
			filename: './css/[name].dev.css',
			allChunks: true
		})
	]
} );