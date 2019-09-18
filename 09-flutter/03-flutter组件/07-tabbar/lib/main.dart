import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart'; // flutter中的UI库

import './views/Tabs.dart';

void main() {
  // new Center表示创建一个Center组件
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Tabs()
    );
  }
}

