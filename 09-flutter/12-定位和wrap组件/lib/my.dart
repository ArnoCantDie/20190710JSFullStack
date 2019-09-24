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
    return Center(
      child: Stack(
        children: <Widget>[
          Container(
            width: 150,
            height: 200,
            color: Colors.red,
          )
        ],
      ),
    );
  }
}




