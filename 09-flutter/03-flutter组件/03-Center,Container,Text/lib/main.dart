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
          "hello,flutter",
          style: TextStyle(
              fontSize: 40,
              fontWeight: FontWeight.w600,
              color: Color.fromRGBO(255, 0, 0, 1),
          ),
        ),
        width: 300,
        height: 300,
        decoration:BoxDecoration(
          color: Colors.yellow,
          border: Border.all(
            width: 2,
            color: Colors.red
          ),
          borderRadius: BorderRadius.all(
            Radius.circular(10)
          )
        ),
        // padding: EdgeInsets.all(20),
        // padding: EdgeInsets.fromLTRB(10, 20, 30, 40),
        // margin: EdgeInsets.all(20),
        alignment: Alignment.bottomRight,
      ),
    );
  }
}
