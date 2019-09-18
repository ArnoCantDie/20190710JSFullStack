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

  List<Widget> _getData(){
    var tempList = listData.map((value){
      return ListTile(
        leading: Image.network(value["imageUrl"]),
        title: Text(value["title"]),
        subtitle: Text(value["author"]),
      );
    });
    return tempList.toList();
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: this._getData(),
    );
  }
}
