vue技术栈：vue + vue-router + vuex + es6 + webpack + vue-cli + UI库 + node

webpack:
    在vue-cli中已经配置比较好。

webpack是JS应用程序的打包器，把项目进行打包处理。

功能：
    1，代码转换  ts--->js   scss,less--->css
    2，文件优化  压缩  合并 
    3，代码校验  检测代码是否符合某些规范 
    4，模块合并  把多个可以合并的模块合并到一起
    5，自动刷新  配置一个开发服务器 
    6，自动发布  xxx

    glup  rollup xxx   ----> webpck


webpack默认遵循commonjs规范：module.exports = "xx"  require()
es6中的规范：export xx export default xxx   import 

webpack4.x中可以实现0配置打包  npx  webpack

0配置打包：npx webpack     npx webpack  --mode  development

使用webpack进行打包时有两种模式：开发模式，生产模式  通过--mode 

一般在配置webpack时，有生成模式和开发模式：
     "scripts": {
        "dev":"webpack --env.development",
        "build":"webpack --env.production",
      },
      module.exports = (env)=>{
        console.log(env)  // { development: true }  { production: true }
      }

默认情况下webpack的配置文件叫webpack.config.js，可以通过--config指定webpack的配置文件名

webpack-merge用来合并配置文件

默认情况下，webpack并不能处理css文件，靠Loader来处理

css需要两个loader来处理：css-loader   style-loader 
css-loader会解析css请求  style-loader会将解析css 变成style标签插入到页面

.scss     node-sass sass-loader 
.less     less   less-loader 
.stylus   stylus   stylus-loader

配置loader:
rules:[
          {test:/\.css$/,use:"style-loader"},
          {test:/\.css$/,use:"css-loader"},
      ]

开发环境：
  webpack-dev-server   项目项目打包到内存中，并不会在硬盘上产生真实的物理文件
  html-webpack-plugin  根据模块生成一个html文件
  clean-webpack-plugin  去掉没有用到的模块

生产环境：





ERROR in ./src/index.css 1:4
Module parse failed: Unexpected token (1:4)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders> body{
|     background: red;
| }
 @ ./src/index.js 4:0-20
Child html-webpack-plugin for "index.html":


如果在一个css文件中使用@import  通过css-loader不认识@import语法

在css3中有一些属性，需要加上前缀，目的就是使用浏览器的兼容。

把css专门打包成一个css文件，在index.html文件中引入css  


默认情况下，webpack不认识图片，需要loader， file-loader  url-loader  
file-loader是让webpack打包图片
url-loader可以让图片转化base64，也可以让webpack打包图片


<img src="./1.png" /> 
<img src=fasdfasdfasdfafasdfasdf />






