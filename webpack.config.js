const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		clean: true,
	},
	resolve: {
		extensions: ['.ts', '.tsx'],
	},
	externals: {
		react: 'react',
	},
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[hash:base64:5]',
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/i,
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							icon: true,
							svgoConfig: {
								plugins: [
									{
										name: 'convertColors',
										params: {
											currentColor: true,
										},
									},
								],
							},
						},
					},
				],
			},
			{
				test: /\.(ts|tsx)?$/,
				use: ['ts-loader'],
				exclude: /node_modules/,
			},
		],
	},
};
