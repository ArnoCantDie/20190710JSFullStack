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
  List<Widget> _getData(){
    return [
      ListTile(
        title: Text("跟着总书记学历史 黄河之水天上来"),
      ),ListTile(
        title: Text("我的老师是网红—教育改革创新让学生们更爱上课"),
      ),ListTile(
        title: Text("全国人大常委会关于授予国家勋章国家荣誉称号决定"),
      )
    ];
  }
  @override
  Widget build(BuildContext context) {
    return ListView(
      children: this._getData()
    );
  }
}
