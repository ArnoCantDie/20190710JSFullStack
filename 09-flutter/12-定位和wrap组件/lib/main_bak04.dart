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
    return Center(
      child: Container(
        height: 400,
        width: 300,
        color: Colors.red,
        child: Stack(
          children: <Widget>[
            Positioned(
              bottom: 20,
              left: 20,
              child: Icon(Icons.home),
            ),
            Positioned(
              top: 30,
              right: 30,
              child: Icon(Icons.search),
            ),
            Positioned(
              bottom: 0,
              right: 0,
              child: Icon(Icons.settings),
            )
          ],
        ),
      ),
    );
  }
}




