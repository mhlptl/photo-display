/* eslint-disable @typescript-eslint/no-var-requires */
const {resolve} = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
	plugins: [
		new Dotenv({
			path: './.env.development'
		})
	],
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
		hot: true,
		port: 3000
	},
	output: {
		filename: "[name].bundle.js",
		path: resolve(__dirname, "dist")
	}
});
