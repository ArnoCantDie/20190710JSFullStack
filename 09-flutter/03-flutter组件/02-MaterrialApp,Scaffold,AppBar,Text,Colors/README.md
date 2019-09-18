创建项目：flutter create myapp

android   android平台相关的代码 
ios       ios平台相关的代码 
lib       flutter相关的代码，我们写的代码主要放在lib下面，类似于vue项目中的src文件夹
test      测试   vue项目里面也有test文件夹  
pubspec.yaml   配置文件   一般放一些第三方依赖   类似于vue项目中的paceage.json文件


在bli下面有一个main.dart，是入口文件，类似于vue中的main.js文件。

runApp后面要跟上一个组件。vue中也有一个render(h) h(App)

在flutter中，一切都是组件，在vue中，一切也是组件，vue中的组件中.vue文件。在flutter中一个组件就是一个类，需要一个组件就是需要new这个类，通常可以把new省略不写。

在flutter中，结构和样式写在一起，当然它不像vue中分结构和样式，它是把样式也定义成了组件。

如果一个组件中包含了另一个组件，那么这个组件内部需要写一个child

--------------------------
组件：
    MaterrialApp,Scaffold,AppBar,Text,Colors
        一般写在最顶层  类似vue中App
        里面封装了一些必要的widget 
        home  主页
        title 标题 
        color 颜色  
        theme 主题 
        routes  路由
        .....

    Scaffold:  脚手架 
        实现material中最基本的布局
        appBar   AppBar 
        body 主体内容 
        ....

    AppBar:
        配置顶部 

    Text:
        文本组件
        需要添加修饰  css  

    Colors:
        颜色相关的组件


















