import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

// 表示是一个有状态组件
class MyHomePage extends StatefulWidget {
  // 当有的地方MyHomePage("xxx") 那么MyHomePage组件需要接收数据 
  // 无论你接收不接收数据，MyHomePage({Key key}) : super(key : key);固定死的
  // MyHomePage({Key key}) : super(key : key);

  // 当我们接收数据时, 下面的代码表示要接收一个title
  // MyHomePage(xxx) 传递title
   MyHomePage({Key key,this.title}) : super(key : key);
   final String title;

  // _MyHomePageState() 对象 --->类型是_MyHomePageState
  @override
   _MyHomePageState createState()=>_MyHomePageState();
}
class _MyHomePageState extends State<MyHomePage> {
  // 定义一个变量，这个一个私有变量
  int _counter = 0;
  _incrementCounter(){
    // 要去改变一个状态，需要通过setState
    setState(() {
     _counter++; 
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('${widget.title}'),),
      body: Center(
        // Column组件  可以从上到下排列很多组件
        // Column中有一个主轴 默认是从上向下
        // 组件都是按照主轴的方向排列的
        child: Column(
          // mainAxisAlignment设置主轴上的组件位置
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text("You have pushed the button this many times:"),
            Text(
              "$_counter",
              style: TextStyle(
                fontSize: 33,
                color: Colors.grey
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        tooltip: "increment",
        child: Icon(Icons.add),
        onPressed: (){
          _incrementCounter();
        },
      ),
    );
  }
}







// 再去创建一个有状态组件
class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}
class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Container(
      
    );
  }
}
