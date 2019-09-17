import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

// 有状态的组件分成两分部：一部分处理状态 ，一部分写结构

// MyHomePage是一个有状态的组件  需要继承StatefulWidget
// 定义一个有状态的组件（动态组件）
class MyHomePage extends StatefulWidget {
  // 有状态组件需要重写createState方法
  // 每一个动态组件，都需要一个createState函数，利用这个函数可以管理state
  // createState函数，返回值是一个_MyHomePageState的实例
  // createState函数返回值一般写成_MyHomePageState
  // @override
  // _MyHomePageState createState(){
  //    return _MyHomePageState();
  //  }

   _MyHomePageState createState()=>_MyHomePageState();
}
class _MyHomePageState extends State<MyHomePage> {
  // 一个有状态的组件也是需要写结构，结构都要写在build方法
  @override
  Widget build(BuildContext context) {
    return Text("MyHomePage");
  }
}