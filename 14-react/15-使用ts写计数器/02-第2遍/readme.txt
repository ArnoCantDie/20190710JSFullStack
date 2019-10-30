初始化项目：
    mkdir myapp
    cd myapp
    npm init -y

安装依赖：
    npm i react react-dom @types/react @types/react-dom react-router-dom @types/react-router-dom react-transition-group @types/react-transition-group react-swipe @types/react-swipe  -S
    npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D
    npm i typescript ts-loader source-map-loader -D
    npm i redux react-redux @types/react-redux redux-thunk  redux-logger @types/redux-logger -S
    npm i connected-react-router -S

依赖说明：
    react @types/react	   react核心库
    react-dom @types/react-dom	   react操作DOM库
    react-router-dom @types/react-router-dom	react路由库
    react-transition-group @types/react-transition-group	react动画库
    react-swipe @types/react-swipe	  react轮播图组件库
    webpack	  webpack核心库
    webpack-cli	  webpack命令行文件
    webpack-dev-server	   webpack开发服务器
    html-webpack-plugin	   webpack用于生成html的插件
    redux	   全局状态管理库
    react-redux @types/react-redux	   连接react和redux的库
    redux-thunk	   可以让store派发一个函数的中间件
    redux-logger @types/redux-logger	  可以在状态改变前后打印状态的中间件
    typescript	  JavaScript语言扩展
    ts-loader	   可以让Webpack使用TypeScript的标准配置文件tsconfig.json编译TypeScript代码
    source-map-loader	  使用任意来自Typescript的sourcemap输出，以此通知webpack何时生成自己的sourcemaps,这让你在调试最终生成的文件时就好像在调试TypeScript源码一样

支持typescript：
    需要生成一个tsconfig.json文件来告诉ts-loader如何编译代码TypeScript代码
    tsc --init
    {
        "compilerOptions": {
            "outDir": "./dist",
            "sourceMap": true,
            "noImplicitAny": true,
            "module": "commonjs",
            "target": "es5",
            "jsx": "react"
        },
        "include": [
            "./src/**/*"
        ]
    }

    配置说明：
        outDir 指定输出目录
        sourceMap：把 ts 文件编译成 js 文件的时候，同时生成对应的sourceMap文件
        noImplicitAny：如果为true的话，TypeScript 编译器无法推断出类型时，它仍然会生成 JavaScript 文件，但是它也会报告一个错误
        module：代码规范
        target：转换成es5
        jsx：react模式会生成React.createElement，在使用前不需要再进行转换操作了，输出文件的扩展名为.js
        include：需要编译的目录。

webpack配置：
    const webpack=require('webpack');
    const HtmlWebpackPlugin=require('html-webpack-plugin');
    const path=require('path');
    module.exports={
        mode: 'development',
        entry: "./src/index.tsx",
        output: {
            filename: "bundle.js",
            path: path.join(__dirname,'dist')
        },
        devtool: "source-map",
        devServer: {
            hot: true,
            contentBase: path.join(__dirname,'dist'),
            historyApiFallback: {
                index:'./index.html'
            }
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        module: {
            rules: [{
                    test: /\.tsx?$/,
                    loader: "ts-loader"
                },
                {
                    enforce: "pre",
                    test: /\.tsx$/,
                    loader: "source-map-loader"
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template:'./src/index.html'
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
    };

环境到此OK。























