import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart'; 

// 导入http模块  请求数据 
import './SelfHttpRequest.dart';
// 导入dio模块  请求数据 
import './SelfDioRequest.dart';
// 导入mytopbar模块
import './MyTopBar.dart';
// 导入Tabs模块
import './Tabs.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // home: SelfHttpRequest()
      // home: SelfDioRequest(),
      // home: MyTopBar(),
      home: Tabs(),
    );
  }
}

