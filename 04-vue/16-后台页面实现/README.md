
------------- 案例： 注册    登录   路由守卫
1，注册时需要调用一个api接口 
2，登录时也是调用一个api接口   如果登录成功   后端给你返回token
3，把token交给vuex管理  目的就是为了非常方便在其它的组件中容易获取token

路由守卫：
    有些页面，只有在登录的时候才能访问，不能直接访问。
    如果登录了，后端给你一个token
    路由守卫就可以根据你有没有这个token来判断你没有登录
    如果有token，那就可以访问页面
    如果没有token，让你跳转到登录页面

token有什么作用？
    路由守卫
    有些接口，不是任何人都调用的，需要有token才能调用