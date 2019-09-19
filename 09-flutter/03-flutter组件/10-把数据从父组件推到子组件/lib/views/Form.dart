import 'package:flutter/material.dart';

class FormPage extends StatelessWidget {
  String title;
  FormPage({this.title="xxx"});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // 是一个浮动按钮
      floatingActionButton: FloatingActionButton(
        child: Text("返回"),
        onPressed: (){
          Navigator.of(context).pop();
        },
      ),
      appBar: AppBar(title: Text(this.title)),
      body: Text("body"),
    );
  }
}

















