import * as path from "path";
import { merge as merge } from 'webpack-merge';
import * as common from './webpack.common';

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	}
});
