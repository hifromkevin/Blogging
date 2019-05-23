const DIST_DIR = __dirname + '/client/dist';
const SRC_DIR = __dirname + '/client/src';

module.exports = {
	mode: 'development',
	entry: `${SRC_DIR}/index.js`,
	output: {
		path: DIST_DIR,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			},
			{
				test: /\.sass$/,
				loaders: ['style-loader','css-loader','sass-loader']
			},
      {
        test: /\.css$/,
        loaders: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
		]
	}
};
