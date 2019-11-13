REM+flex：
    适配：https://juejin.im/post/5c6e53f1f265da2dc538b5bb
    cube里面自带适配，不需要上面的适配，如果用别的UI库，需要使用上面的适配方案

首页白屏：
    1，把首页做服务端渲染  SEO   nuxt.js写项目   
    2，预渲染 数据还没有回来前，先返回的一些死数据，多用在首页面的内部经常不变
    3，骨架屏  配置   

异步加载组件出现闪动？
    答：

tabar定位到最底下，也会出现闪动？
    答：最好使用flex

你是如何封装axios? 

管理数据（状态）：  
    1，状态放到data  
    2，状态放到vuex 
    参考：如果状态只有当前组件中使用放到data中，如果在多个组件或多个页面中都使用到了，放到vuex中。如用户信息，多个页面中都要用到，肯定是放到vuex中。

    现在把所有状态都交给vuex管理。

请求数据交给vuex管理，然后把数据渲染出来流程：
    1，封装一个请求api接口的方法  
    2，写action    action-type
    3，写mutations   
    4，映射  渲染
    
首页的电影列表是可以滚动，要获取首页可以滚动的视口高度。？？？ 
    1，封装一个请求所有的电影的方法
    2，写action  调用上面封装的方法 
    3，commit一个mutation   mutation就改变状态
    4，映射  ...mapAction() 
    5，mounted  触发actons  
    6，...mapState  films  
    7，v-for 


ajaxMovieList: 有没有必要交给vuex?
如果多个页面或组件需要共享数据，需要把这个数据交给vuex。
如果数据是组件特有的，直接交给组件的data。

来回切换tabbar时，不能重新请求数据。
    路由钩子
    为什么切换时，会重新请求数据？ 答：

来加切换tabbar时，需要加上动画。
    动画 
    路由钩子
