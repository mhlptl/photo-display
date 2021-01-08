/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
		hot: true,
		port: 3000
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	}
});
