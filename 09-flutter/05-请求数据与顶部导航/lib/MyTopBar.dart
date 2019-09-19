import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class MyTopBar extends StatefulWidget {
  @override
  _MyTopBarState createState() => _MyTopBarState();
}

// extends表示继承 
// SingleTickerProviderStateMixin 对我们的组件进行配置，主要是配置动画切换效果
class _MyTopBarState extends State<MyTopBar> with SingleTickerProviderStateMixin{
  // TabBar组件需要有一个控制器 
  TabController _controller;

  @override
  void initState() {
    // 给导航控制器进行初始化
    // 需要在这个勾子函数中对TabBar进行初始化
    // _controller能够将页面和导航绑定到一起，最终实现切换的效果
    // length 导航/页面的个数  vsync动画效果异步匹配
    _controller = TabController(length: 3,vsync: this);
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: TabBar(
          controller: _controller,
          tabs: <Widget>[
            Tab(icon: Icon(Icons.directions_bike)),
            Tab(icon: Icon(Icons.directions_car)),
            Tab(icon: Icon(Icons.directions_subway)),
          ],
        )
      ),
      body: TabBarView(
        controller: _controller,
        children: <Widget>[
          SelfHomePage(page:1),
          SelfHomePage(page:2),
          SelfHomePage(page:3),
        ],
      ),
    );
  }
}
class SelfHomePage extends StatelessWidget {
  int page;
  // 类的一个重写，重写的目的就是类可以传递参数
  SelfHomePage({Key key, @required this.page}):super(key:key);
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text("page $page",style: TextStyle(fontSize: 40),),
    );
  }
}