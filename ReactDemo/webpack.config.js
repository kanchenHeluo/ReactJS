var config = {
	entry:  './main.js',

	output: {
		path: './',
		filename: 'index.js',
	},

	devSever: {
		inline: true,
		port: 7777,
	},

	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',

			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}

module.exports = config;