/* eslint-disable @typescript-eslint/no-var-requires */
const {join} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	target: "web",
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: join(__dirname, "src", "index.html")
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				enforce: "pre",
				test: /\.js$/,
				use: "source-map-loader"
			},
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				use: "file-loader"
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", "css"]
	},
	optimization: {
		minimizer: [new CssMinimizerPlugin()],
		moduleIds: "deterministic",
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all"
				}
			}
		}
	}
};
