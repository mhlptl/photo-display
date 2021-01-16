/* eslint-disable @typescript-eslint/no-var-requires */
const {resolve} = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
	plugins: [
		new Dotenv()
	],
	mode: "production",
	devtool: "source-map",
	output: {
		filename: "[name].[contenthash].js",
		path: resolve(__dirname, "dist")
	}
});
