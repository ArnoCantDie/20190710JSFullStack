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
    List<Widget> list = new List();
    for(var i=0; i<20; i++){
      list.add(
        ListTile(
          title: Text("我是第$i条列表"),
        )
      );
    }
    return list;
  }
  @override
  Widget build(BuildContext context) {
    return ListView(
      children: this._getData()
    );
  }
}
