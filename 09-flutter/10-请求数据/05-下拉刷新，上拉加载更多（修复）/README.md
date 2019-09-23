flutter就是UI库  60个组件   

弹出框：
    AlertDialog
    SimpleDialog
    showModalBottomSheet
    第三方的弹出框  toast 
    自定义弹出框：xxxx

请求数据：
    http:
        get:
        post:
    请求数据，渲染数据：
    
    dio: 
        get:
        post:
    

从服务器得到的数据，要么是buffer，要么是字符串。
要使用数据，需要把json字符串转成Map类型 
    json.decode()  
如果把一个Map类型对象，转成json字符串
    json.encode() 

convart

    把一个JSON字符串转成JSON对象，把一个JSON对象转成一个JSON字符串。

--------------------------------

flutter内部提供了一个组件，叫RefreshIndicator，可以实现下拉刷新。并没有上拉加载更多的组件。----> ListView  Listview中有一个属性，叫ScrollController属性，这是ListView的滑动事件。我们可以利用ScrollController实现上拉加载更多。

分页：
http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1




















