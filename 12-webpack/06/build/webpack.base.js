// 引入生产环境和开发环境的webpack的配置文件
const dev = require("./webpack.dev")
const prod = require("./webpack.prod")
const path = require("path");
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env)=>{
    let isDev = env.development;
    const base = {
        entry:path.resolve(__dirname,"../src/index.js"),
        module:{
            // style-loader 把css打包成内部样式  style标签
            rules:[
                {
                    test:/\.css$/,
                    use:[
                        isDev ? "style-loader":MiniCssExtractPlugin.loader,
                    {
                    loader:"css-loader",
                    options:{
                        // 如果css文件中，引入其它的文件，或你使用@import
                        importLoaders:2
                    }
                },"postcss-loader","sass-loader"]},
                {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
                {
                    // 处理字体或者图标
                    test:/\.(ttf|svg|woff|eot)$/,
                    use:"file-loader"
                },
                {
                    // 处理图片
                    test:/\.(png|jpg|jpeg|gif)$/,
                    use:{
                        loader:"url-loader",
                        options:{
                            name:"image/[name].[hash:7].[ext]",
                            limit:1024*10  // 1024*10 10以下，会转成base64
                        }
                    }
                    // use:"file-loader"  // file-loader默认的功能是copy的功能  如果一个图片比较小  把这个图片转化成base64  本质就是把一张图片转成字符串 好处就是避免二次请求  一般会把一些小图标转成base64
                }
            ]
        },
        output:{
            filename:"bundle.js",
            path:path.resolve(__dirname,"../dist")
        },
        plugins:[
            !isDev && new MiniCssExtractPlugin({
                filename:"css/main.css"
            }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template:path.resolve(__dirname,"../public/index.html"),
                filename:"index.html",
                minify:!isDev && {
                    removeAttributeQuotes:true,
                    collapseWhitespace:true
                }
            })
        ].filter(Boolean)
    }
    if(isDev){   // merge是把两配置文件合并  需要返回  如果不返回走的还是默认的配置文件
       return merge(base,dev)
    }else{
       return merge(base,prod)
    }
}