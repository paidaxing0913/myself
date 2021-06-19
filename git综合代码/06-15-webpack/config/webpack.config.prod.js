const { Template } = require('ejs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
    // 入口路径
    entry:"./src/js/index.js",
    // 出口路径
    output:{
        path:path.resolve(__dirname,"../build"),
        filename:"./js/build.js",
        publicPath: "/"
    },
    // 打包环境
    mode:"production",
    // loader的配置
    module: {
        rules: [{
            test: /\.less$/i,
            use: [MiniCssExtractPlugin.loader,{
                loader: "css-loader" // translates CSS into CommonJS
            }, 
            {
              loader: 'postcss-loader',
                  options: {
                      postcssOptions: {
                          plugins: [
                              [
                                  'postcss-preset-env',
                                  {
                                      // 其他选项
                                  },
                              ],
                          ],
                      },
                      },
                  },{
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
                  name:'imgs/[hash:10].[ext]'
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
        template: './src/index.html',
        minify: {
          //去除空格
          collapseWhitespace: true,
          //去除注释
          removeComments: true,
          //移除默认属性
          removeRedundantAttributes: true,
          //移除script的type属性
          removeScriptTypeAttributes: true,
          //移除link的type属性
          removeStyleLinkTypeAttributes: true,
          //使用doctype
          useShortDoctype: true
      }
    }),new MiniCssExtractPlugin({
      filename:"css/[name].css"
    })],

    devServer : {
        port:8888,
        host: '127.0.0.1',
        open: true,
        compress: true,
        quiet: true,
    },

    optimization: {
      minimizer: [
          new CssMinimizerPlugin(),
      ],
  },

}