import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart'; // flutter中的UI库

void main(){
  runApp(MyApp());
}
// 第一个静态组件中必须要有一个方法，叫build
// build是用来做组件的渲染
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    // 每个项目最外层必须包一个MaterialApp,里面放UI组件
    // MaterialApp里面还包含了渲染移动的规范
    return MaterialApp(
      title: "App",
      theme: ThemeData(
        primaryColor: Colors.blue
      ),
      home: Text("flutter hello"),
    );
  }
}
