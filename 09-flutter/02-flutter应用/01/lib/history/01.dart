import 'package:flutter/cupertino.dart';

void main(){
  runApp(MyApp());
}

// flutter把组件分成了两类：有状态和无状态，无状态的组件也叫静态组件，有状态的组件叫动态组件
// flutter规定一个组件就是一类   一切都是组件
// 定义一个MyApp组件
class MyApp extends StatelessWidget{
  // 一个组件中必须有一个build方法
  // Widget 函数的返回值类型 
  // @override 修饰器  override 重写
  // BuildContext  形参的类型  context是形参
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return null;
  }
}
