module.exports = {
    entry: "./src/main.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    output: {
        publicPath: "/dist/",
        path: __dirname + "/dist/",
        filename: "app.min.js"
    }
};