import 'package:flutter/material.dart'; // flutter中的UI库

void main(){
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
      theme: ThemeData(
        primarySwatch: Colors.yellow
      ),
    );
  }
}

// 自定义一个组件
class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text(
        "你好，flutter",
        textDirection: TextDirection.rtl,
        style: TextStyle(
          fontSize: 40,
          fontWeight:FontWeight.w600,
          // color: Colors.green,
          color: Color.fromRGBO(255, 0, 0, 1)
        ),
      ),
    );
  }
}


