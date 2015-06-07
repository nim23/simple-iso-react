var webpack = require('webpack');

module.exports = {
	output: {
		filename: 'bundle.min.js'
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader?optional[]=runtime&stage=1'
			}
		]
	},
	devtool: 'eval-source-map',
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				BROWSER: JSON.stringify(true),
				NODE_ENV: JSON.stringify('development')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	],
	resolve: {
		extensions: ['','.json','.js'],
		modulesDirectories: ['node_modules', 'app']
	}
};
