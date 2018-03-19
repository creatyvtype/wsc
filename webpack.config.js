var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

// from: http://ditrospecta.com/javascript/react/es6/webpack/heroku/2015/08/08/deploying-react-webpack-heroku.html
// from: http://revelry.media/tech-talk/2016/2/15/getting-a-simple-react-app-on-heroku
module.exports = {
    context: __dirname + "/app",
    mode: debug ? 'development' : 'production',
    devtool: debug ? "inline-sourcemap" : "sourcemap",
    entry: "./js/index.js",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    plugins: [
                        "transform-class-properties",
                        "transform-decorators-legacy"
                    ]
                }
            },
            {
                test: /\.scss$/,
                include: __dirname + "/app",
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.png$/,
                loader: "file-loader"
            }
        ]
    },
    output: {
        path: __dirname + "/app",
        publicPath: "/",
        filename: "index.min.js"
    },
    resolve: {
        modules: [
            path.resolve("./app"),
            path.resolve("./node_modules"),
            "node_modules",
            "styles",
            "js",
            "images"
        ],
        extensions: [".js", ".jsx", ".json", ".scss"]
    },

    plugins: debug
        ? [new webpack.HotModuleReplacementPlugin()]
        : [
              new webpack.optimize.DedupePlugin(),
              new webpack.optimize.OccurenceOrderPlugin(),
              new webpack.optimize.UglifyJsPlugin({
                  mangle: false,
                  sourcemap: false
              }),
              new webpack.DefinePlugin({
                  "process.env": {
                      NODE_ENV: JSON.stringify("production")
                  }
              })
          ]
};
