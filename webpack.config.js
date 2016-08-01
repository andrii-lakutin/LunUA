module.exports = {
	entry : "./scripts/client/app.js",            //входной js файл
	output : {
		filename : "build.js"	 //имя билда на выходе
	},

	watch : true ,               //автоотслеживание обновлений в файлах

	watchOptions : {
		aggregateTimeout : 100   //каждые 100 мс
	},

	devtool : "source-map",      //для инструментов развработчика

	module : {
		loaders: [{
		    test: /\.js?$/,
		    exclude: /(node_modules|bower_components)/,				
		    loader: 'babel',									//babel
		    query: {
		      presets: ['es2015','react'],
		      plugins: ['transform-runtime']
		    }
		}]
	}
};
