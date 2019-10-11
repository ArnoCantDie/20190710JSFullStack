// 引入生产环境和开发环境的webpack的配置文件
const dev = require("./webpack.dev")
const prod = require("./webpack.prod")
const path = require("path");
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = (env)=>{
    let isDev = env.development;
    const base = {
        entry:path.resolve(__dirname,"../src/index.js"),
        module:{
            rules:[
                {test:/\.css$/,use:["style-loader","css-loader"]},
                {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]}
            ]
        },
        output:{
            filename:"bundle.js",
            path:path.resolve(__dirname,"../dist")
        },
        plugins:[
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template:path.resolve(__dirname,"../public/index.html"),
                filename:"index.html",
                minify:!isDev && {
                    removeAttributeQuotes:true,
                    collapseWhitespace:true
                }
            })
        ]
    }
    if(isDev){   // merge是把两配置文件合并  需要返回  如果不返回走的还是默认的配置文件
       return merge(base,dev)
    }else{
       return merge(base,prod)
    }
}