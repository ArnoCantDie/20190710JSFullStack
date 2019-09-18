import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart'; // flutter中的UI库

import './listData.dart';
void main() {
  // new Center表示创建一个Center组件
  runApp(MyApp());
}

// 自定义组件   写类   无状态组件
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Flutter"),
        ),
        body: HomeContent(),
      ),
    );
  }
}
// 自定义一个组件
class HomeContent extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 400,
      height: 800,
      // color: Colors.pink,
      child: Column(
        // 把富余空间放到每每两个项目中间
        // mainAxisAlignment: MainAxisAlignment.spaceBetween,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          // Text("hello"),
          // Text("hello"),
          // Text("hello"),
          // Text("hello"),
          IconContainer(Icons.search,color:Colors.red),
          IconContainer(Icons.home,color:Colors.blue),
          IconContainer(Icons.select_all,color:Colors.green),
        ],
      ),
    );
  }
}

// 定义一个组件
class IconContainer extends StatelessWidget {
  double size = 40.0;
  IconData icon;
  Color color;
  IconContainer(this.icon,{this.color});
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      width: 100,
      color: Colors.pink,
      child: Center(
        child: Icon(this.icon,size: this.size,color: this.color),
      ),
    );
  }
}
