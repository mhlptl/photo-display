import * as path from "path";
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin as CleanWebpackPlugin } from 'clean-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

module.exports = {
	entry: './src/index.tsx',
	target: 'web',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				use: 'source-map-loader'
			},
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				use: 'file-loader'
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js']
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin()
		],
		moduleIds: 'deterministic',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
};
