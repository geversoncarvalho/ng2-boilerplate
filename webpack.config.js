module.exports = {
    entry: {
        main: './app/main.ts'
    },
    output: {
        filename: '[name].js',
        path: './dist'
    },
    resolver: ['', '.js', '.ts'],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};