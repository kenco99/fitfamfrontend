const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
    var baseUrl;
    if (argv.mode === 'development') {
        baseUrl = 'http://localhost:5000/';
    } else {
        baseUrl = 'https://fitfam-web-app.herokuapp.com/';
    }

    return {
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg|png|gif|wav|mp3)(\?v=\d+\.\d+\.\d+)?$/,
                    use: ['file-loader'],
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ]
        },
        devServer: {
            historyApiFallback: true,
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true
                        }
                    }
                })
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            }),
            new webpack.DefinePlugin({
                BASE_URL: JSON.stringify(baseUrl)
            }),
        ]
    };
}