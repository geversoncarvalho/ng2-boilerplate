var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/app/main.ts']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "build/bundles/")
    },
    devtool: 'source-map',
    include: [
        path.resolve(__dirname, "src/app/"),
    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/, 
                loaders: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!less?strictMath&noIeCompat')
            }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("styles.bundle.css")
    ]
};

function isExternal(module) {
    var userRequest = module.userRequest;

    if (typeof userRequest !== 'string') {
        return false;
    }

    return userRequest.indexOf('node_modules') >= 0;
}