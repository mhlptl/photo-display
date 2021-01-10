/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist")
	}
});
