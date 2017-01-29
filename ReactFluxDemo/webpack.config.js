var config = {
	entry:  './app.js',

	output: {
		path: './',
		filename: 'index.js',
	},

	devServer: {
		inline: true,
		port: 7777,
	},

	dependencies: {
		"css-loader": "^0.26.1",
		"style-loader": "^0.13.1"
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				query: {
					presets: ['es2015', 'react']
				},
			},
			{
				test: /\.css?$/,
				loader: 'style-loader!css-loader?modules'
				//[
					//'style?sourceMap',
					//'css?modules&localIdentName=[name]__[local]-[hash:base64:5]'
				//]
			}
		]
	}
}

module.exports = config;