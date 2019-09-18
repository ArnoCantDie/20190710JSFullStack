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
  

  List<Widget> _getListData(){
    List<Widget> list = new List();

    for(var i=0; i<20; i++){
      list.add(Container(
        // margin: EdgeInsets.all(10),
        alignment: Alignment.center,
        child: Text(
          "这是第$i条数据",
          style: TextStyle(color: Colors.white,fontSize: 20),
        ),
        color: Colors.pink,
      ));
    }

    return list;
  }

  @override
  Widget build(BuildContext context) {
    return GridView.count(
      crossAxisCount: 2,  // 一行多少个 
      crossAxisSpacing: 10, // 列与列的间隔
      mainAxisSpacing: 10, // 行与行的间隔
      padding: EdgeInsets.all(10), 
      childAspectRatio: 1,  // 设置宽高比
      children: this._getListData(),
    );
  }
}
