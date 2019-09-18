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
      child: Row(
        // 把富余空间放到每每两个项目中间
        // mainAxisAlignment: MainAxisAlignment.spaceBetween,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Expanded(
            flex: 1,
            child: IconContainer(Icons.search,color:Colors.white),
          ),
          Expanded(
            flex: 2,
            child: IconContainer(Icons.home,color:Colors.white),
          ),
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
      margin: EdgeInsets.all(10),
      color: Colors.blue,
      child: Center(
        child: Icon(this.icon,size: this.size,color: this.color),
      ),
    );
  }
}
