import 'package:flutter/material.dart';

class SelfContainer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("SelfContainer"),),
      // 以后写的每一个组件，最外面最好包一个Container
      body: Container(
        width: 200,
        height: 200,
        margin: EdgeInsets.all(20),
        padding: EdgeInsets.all(20),
        // 指定颜色需要装饰器 
        decoration: BoxDecoration(
          color: Colors.yellow
        ),
        // child: Text("hello flutter"),
      ),
    );
  }
}