var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
 

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
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!less?strictMath&noIeCompat')
            },
            { 
                test: /\.(html|css)$/, 
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("styles.bundle.css"),
        new CopyWebpackPlugin([
            {from: 'node_modules/bootstrap/dist/', to: '../libs/bootstrap/dist/'},
        ]),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/index.html',
            lib: ['bootstrap.css']
        }),
        new HtmlWebpackExternalsPlugin([
            {
                name: 'bootstrap.css',
                url: '../libs/bootstrap/dist/css/bootstrap.min.css'
            }
        ], {
            basedir: __dirname + '/build'
        })
    ]
};