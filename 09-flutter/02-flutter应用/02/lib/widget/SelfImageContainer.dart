import 'package:flutter/material.dart';

class SelfImageContainer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // return Text("image");
    return Scaffold(
      appBar: AppBar(title: Text("SelfImage"),),
      body: Center(
        child: Container(
          width: 200,
          height: 300,
          decoration: BoxDecoration(
            color: Colors.yellow
          ),
          child: Image(
            image: NetworkImage("https://cdn.jsdelivr.net/gh/flutterchina/website@1.0/images/flutter-mark-square-100.png"),
            // 图片的展开方式
            // fit: BoxFit.cover, // 全面铺开，占满整个div，但是有裁切
            // fit: BoxFit.fill, // 撑满整个Div  但是有拉伸  没有裁切
            // fit: BoxFit.fitWidth,  // 宽度撑满
            // fit: BoxFit.fitHeight,  // 高度撑满
            fit: BoxFit.contain
          ),
        ),
      ),
    );
  }
}