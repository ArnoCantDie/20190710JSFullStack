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
    return ListView(
      padding: EdgeInsets.all(10),
      children: <Widget>[
        Image.network("https://imgsa.baidu.com/news/q%3D100/sign=47fa5064a24bd11302cdb3326aaea488/b999a9014c086e0692fa8b5c0d087bf40ad1cb53.jpg"),
        Container(
          child: Text(
            "88年前的这一天，我们永远铭记！",
            textAlign: TextAlign.center,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 24,
            ),
          ),
          height: 60,
          padding: EdgeInsets.fromLTRB(5, 10, 5, 10),
        ), Image.network("https://imgsa.baidu.com/news/q%3D100/sign=47fa5064a24bd11302cdb3326aaea488/b999a9014c086e0692fa8b5c0d087bf40ad1cb53.jpg"),
        Container(
          child: Text(
            "88年前的这一天，我们永远铭记！",
            textAlign: TextAlign.center,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 24,
            ),
          ),
          height: 60,
          padding: EdgeInsets.fromLTRB(5, 10, 5, 10),
        ), Image.network("https://imgsa.baidu.com/news/q%3D100/sign=47fa5064a24bd11302cdb3326aaea488/b999a9014c086e0692fa8b5c0d087bf40ad1cb53.jpg"),
        Container(
          child: Text(
            "88年前的这一天，我们永远铭记！",
            textAlign: TextAlign.center,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 24,
            ),
          ),
          height: 60,
          padding: EdgeInsets.fromLTRB(5, 10, 5, 10),
        ), Image.network("https://imgsa.baidu.com/news/q%3D100/sign=47fa5064a24bd11302cdb3326aaea488/b999a9014c086e0692fa8b5c0d087bf40ad1cb53.jpg"),
        Container(
          child: Text(
            "88年前的这一天，我们永远铭记！",
            textAlign: TextAlign.center,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 24,
            ),
          ),
          height: 60,
          padding: EdgeInsets.fromLTRB(5, 10, 5, 10),
        )
      ],
    );
  }
}
