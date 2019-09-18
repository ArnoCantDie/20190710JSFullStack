import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart'; // flutter中的UI库

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
      height: 200,
      decoration: BoxDecoration(
        color: Colors.red
      ),
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          Container(
            width: 180,
            color: Colors.orange,
          ),Container(
            width: 180,
            color: Colors.red,
          ),Container(
            width: 180,
            color: Colors.green,
          ),Container(
            width: 180,
            color: Colors.blue,
          ),Container(
            width: 180,
            color: Colors.pink,
          )
        ],
      ),
    );
  }
}
