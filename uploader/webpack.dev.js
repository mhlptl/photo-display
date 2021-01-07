import * as path from "path";
import { merge as merge } from 'webpack-merge';
import * as common from './webpack.common';

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
});
