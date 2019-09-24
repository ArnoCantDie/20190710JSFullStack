import 'package:flutter/material.dart';

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
    return Stack(
        alignment: Alignment.topRight,
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
          Text("hello"),
          // Text("word")
        ],
      );
  }
}




