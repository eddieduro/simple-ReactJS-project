module.exports = {
	plugins: [
		require('babel-plugin-syntax-class-properties'),
		require('babel-plugin-decorators'),
		require('babel-plugin-syntax-object-rest-spread'),

		// You can pass parameters using an array syntax
		[
			require('babel-plugin-transform-regenerator'),
			{
				aysnc: false,
				asyncGenerators: false
			}
		]
	]
};