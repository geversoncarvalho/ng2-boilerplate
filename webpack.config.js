var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist/"),
    },
    include: [
        path.resolve(__dirname, "src/app/"),
    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.css']
    },
    module: {
        loaders: [
            {test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader']},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.bundle.css")
    ]
};