const glob = require('glob')

const files = glob.sync('./src/pages/**/*.js')

module.exports = {
	target: 'webworker',
	context: __dirname,
	entry: files.concat(['./src/index.js']),
	mode: 'development',
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
}
