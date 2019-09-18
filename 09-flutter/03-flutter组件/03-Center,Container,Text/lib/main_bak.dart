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
    return Center(
      child: Container(
        child: Text(
          "hello,flutter,hello,flutterhello,flutterhello,flutterhello,flutterhello,flutter",
          textDirection: TextDirection.rtl,
          overflow: TextOverflow.ellipsis,
          // overflow: TextOverflow.fade,
          textScaleFactor: 2,
          maxLines:2,
          style: TextStyle(
              fontSize: 40,
              fontWeight: FontWeight.w600,
              color: Color.fromRGBO(255, 0, 0, 1),
              fontStyle:FontStyle.italic,
              decoration: TextDecoration.lineThrough,
              decorationColor: Colors.black,
              decorationStyle: TextDecorationStyle.dashed,
              letterSpacing: 5
          ),
        ),
      ),
    );
  }
}
