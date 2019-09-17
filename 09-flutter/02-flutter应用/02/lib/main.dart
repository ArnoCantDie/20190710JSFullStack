import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart'; // flutter中的UI库
// Text组件
import "./widget/SelfText.dart";
// Image组件
import './widget/SelfImage.dart';
// Container组件
import './widget/SelfContainer.dart';
// 给Image组件外面包一个Container组件
import './widget/SelfImageContainer.dart';
// 使用本地图片
import './widget/SelfImageAsset.dart';
// 计数器
import "./widget/MyHomePage.dart";

void main(){
  runApp(MyApp());
}
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "App",
      theme: ThemeData(
        primaryColor: Colors.pink
      ),
      // home: SelfText(),  
      // home: SelfImage(), 
      // home: SelfContainer(),
      // home: SelfImageContainer(), 
      // home: SelfImageAsset(),
      home: MyHomePage(title: "计数器",),
    );
  }
}

