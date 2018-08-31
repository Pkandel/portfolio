/* eslint-disable no-console */
import path from 'path';
import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';

import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import {
	BundleAnalyzerPlugin
} from 'webpack-bundle-analyzer';

// const dependencies = require('./package.json').dependencies;
// let vendorArray = [];
// for(const key in dependencies) {
// 	vendorArray.push(key);
// }
// vendorArray = vendorArray.filter(key => key !== 'babel-polyfill');

const resolve = (...args) => {
	return path.resolve(__dirname, ...args);
}

const env = process.env.NODE_ENV || 'production';
console.log(`Application running in ${env} mode`);
const dev = env === 'development';

const common = {
	entry: resolve('src'),
	output: {
		path: resolve('dist'),
		filename: 'js/app.js',
		publicPath: '/'
	},
	module: {
		rules: [{
				test: /\.jsx?$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css?$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss?$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							disable: true, // webpack@2.x and newer
						},
					},
				]
			},
		]
	},

	plugins: [
		new Dotenv(),
		new HtmlWebpackPlugin({
			template: resolve('public/index.html'),
			inject: 'body'
		})
	],
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
		alias: {
			// to use alias support in Webstorm we have to mark src as mark directory as resource root
			mock_api: path.resolve(__dirname, 'src/api/mock_api'),
			components: path.resolve(__dirname, 'src/components')
		}

	}

};

const devConfig = merge(common, {
	mode: 'development',
	devServer: {
		host: '0.0.0.0',
		contentBase: [path.resolve(__dirname, 'public'), path.resolve(__dirname, 'src/api/mock_api')],
		port: process.env.PORT || 3000,
		historyApiFallback: true,
		hot: true,
		inline: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]

});

const prodConfig = merge(common, {
	mode: 'production',
	optimization: {
		minimizer: [
			new UglifyJsPlugin()
		]
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: resolve('public/*'),
			to: resolve('dist')
		}])
	]
});

export default dev ? devConfig : prodConfig;