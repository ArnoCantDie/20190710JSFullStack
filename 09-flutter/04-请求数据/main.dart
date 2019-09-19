import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart'; 

// 导入http模块  请求数据 
import './SelfHttpRequest.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SelfHttpRequest()
    );
  }
}

