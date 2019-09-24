import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';

void main()=>runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text("定位"),),
        body: PosionDemo(),
      ),
    );
  }
}

class PosionDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Stack坐标轴的原点第一个容器中心点
    return Stack(
        // alignment: Alignment(.5, .5),
        // alignment: Alignment(0, 0),
        alignment: Alignment(1, 1),
        // alignment: Alignment.bottomLeft,
        // alignment: Alignment.centerLeft,
        children: <Widget>[
          Container(
            width: 300,
            height: 400,
            color: Colors.red,
          ),
          Container(
            width: 80,
            height: 80,
            color: Colors.yellow,
          ),
          // Text("hello"),
          // Text("word")
        ],
      );
  }
}




