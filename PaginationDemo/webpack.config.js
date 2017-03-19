var config = {
	entry: './main.js',
	output: {
		path:'./',
		filename: 'index.js'
	},
	devServer: {
		inline:true,
		port:7777
	},
	dependencies: {
		"css-loader": "^0.27.3",
		"style-loader": "^0.14.1"
	},
	module:{
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query:{
				presets: ['es2015','react','stage-0']
			}
		},
		{
			test: /\.css?$/,
			loader: 'style-loader!css-loader?modules'
		}]
	}

}
module.exports = config;
