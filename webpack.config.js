module.exports = {
    entry: "./src/main.js",
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
    }
};