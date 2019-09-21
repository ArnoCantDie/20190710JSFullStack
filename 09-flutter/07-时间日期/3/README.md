路由：
    基本路由：Navagation.push  pop
        传值： 

    命名式路由：类似于vue中的路由
        1，配置规则
        2，在合适的地方进行跳转 

    像vue一样，把路由抽离出来：
        需要写一拖代码

    命名式路由的传值：



vue是做webapp，地址栏，url-->组件
npm i vue-router 
routes:[
    path:"/",componets:Home
    path:"/about"/components:About
]

要使用命名式路由：
    1，创建Routes.dart文件  
        routes 规则 
            // 不需要传值
            "/form":(context)=>FormPage(),  
            // 可以传值
            "/search":(context,{arguments})=>SearchPage(arguments:arguments),

        onGenerateRoute
            固定写法
    2，在main.dart中配置如下：
        return MaterialApp(
            initialRoute: "/",  // 默认访问路径
            onGenerateRoute: onGenerateRoute
        );
    4，跳转：
         Navigator.pushNamed(context, "/search")  // 转跳时，不传值
         Navigator.pushNamed(context, "/search",arguments: {  // 跳时，传值
            "id":001
         });

--------------- npm  pub.dev 

当处理日期时，一般都会用到一个日期格式化的一个插件。data_format

InkWell:可以让一个不能点击的组件变成可以点击的组件

在flutter中，处理日期使用datapicker:
 内置的
    
 第三方的
    
-------------------- 
打包  
路由
格式化时间：date_format: ^1.0.6
flutter内部有处理日期有组件



















