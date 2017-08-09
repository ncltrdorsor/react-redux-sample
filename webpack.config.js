var path = require( 'path' );

//OPTION TO USE webpack-combine-loaders TO MERGE BOTH CSS LOADERS

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
     module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
             }
         },
        {
        test: /\.css$/,
        loader: 'style-loader'
        },
        {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
                modules: true,
                localIdentName: '[name]_[local]__[hash:base64:5]'
            }
        }
         
        ]
     },
    resolve: {
        modulesDirectories: ['src', 'node_modules'],
        extensions: ['', '.json', '.js', '.jsx'],
    },        
}