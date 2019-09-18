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
        width: 160,
        height: 220,
        decoration: BoxDecoration(
          color: Colors.yellow,
          // borderRadius: BorderRadius.circular(100),
          borderRadius: BorderRadius.all(
            Radius.circular(100)
          ),
          image: DecorationImage(
            // css中背景图片
            image: NetworkImage("https://p0.meituan.net/movie/4c01895cfd53e82f7c3048c407974a6b4739229.jpg@160w_220h_1e_1c"),
          )
        ),
      ),
    );
  }
}
