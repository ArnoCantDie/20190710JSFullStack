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
        child: Image.network(
          "https://p0.meituan.net/movie/4c01895cfd53e82f7c3048c407974a6b4739229.jpg@160w_220h_1e_1c",
          alignment: Alignment.bottomCenter,
          // color: Colors.red,
          // colorBlendMode: BlendMode.screen,
          // fit: BoxFit.cover,
          // repeat: ImageRepeat.repeat,
        ),
        width: 300,
        height: 300,
        decoration: BoxDecoration(
          color: Colors.yellow
        ),
      ),
    );
  }
}
