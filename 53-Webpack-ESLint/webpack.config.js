const { resolve } = require("path");
const path = require("path");

module.exports = {
    entry: "./js/app.js",
    output: { path: resolve(__dirname, "public/js"),
            filename: "bundle.js"},
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "/"),
        compress: true,
        port: 9000,
        publicPath: "/public/js/",
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}

//// concurrently  --kill-others \"npm run watch\" \"webpack-dev-server\"

//publicPath: "/public/js/",
//watchContentBase: true