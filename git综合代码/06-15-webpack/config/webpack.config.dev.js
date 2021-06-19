const { Template } = require('ejs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    // 入口路径
    entry:"./src/js/index.js",
    // 出口路径
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"./js/build.js"
    },
    // 打包环境
    mode:"development",
    // loader的配置
    module: {
        rules: [{
            test: /\.less$/i,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 3 * 1024,
                  name:'./imgs/[hash:10].[ext]'
                }
              }
            ]
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },]
    },
    // 插件的配置
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],

    devServer : {
        port:8888,
        host: '127.0.0.1',
        open: true,
        compress: true,
        quiet: true,
    }
}