import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart'; // flutter中的UI库

import './tabs.dart';
import './address/AddressList.dart';

import './address/GetAddress.dart';

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

