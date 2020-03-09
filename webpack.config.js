module.exports = {
    entry: "./src/App.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        publicPath: "/dist/",
        path: __dirname + "/dist/",
        filename: "app.min.js"
    },
    devServer: {
        contentBase: __dirname,
        // historyApiFallback: true,
        writeToDisk: true
    }
};
