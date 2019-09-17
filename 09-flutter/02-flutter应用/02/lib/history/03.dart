import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart'; // flutter中的UI库

void main(){
  runApp(MyApp());
}
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // 每一个页面上面的都有一个title，但是不会显示到页面上
      title: "App",
      // 设置当前项目的默认颜色
      theme: ThemeData(
        primaryColor: Colors.pink
      ),
      // home: Text("flutter hello"),  // Text是一个组件，是material里面最基本的组件
      home: HomePage(),
    );
  }
}

// 按st可以快速搭建静态组件的结构
class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Container  -->  div
    // return Text("flutter");
    // scaffold也是一个组件  叫脚手架，提供很多现成的组成可以调用
    return Scaffold(
      // 头部导航 
      appBar: AppBar(
        title: Text("flutter"),
      ),
      body:Center(
        child: Text("hello world"),
      )
    );
  }
}
