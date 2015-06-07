var webpack = require('webpack');

module.exports = {
	output: {
		filename: 'bundle.js'
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
	watch: true,
	devtool: 'eval-source-map',
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				BROWSER: JSON.stringify(true),
				NODE_ENV: JSON.stringify('development')
			}
		})
	],
	resolve: {
		extensions: ['','.json','.js'],
		modulesDirectories: ['node_modules', 'app']
	}
};
