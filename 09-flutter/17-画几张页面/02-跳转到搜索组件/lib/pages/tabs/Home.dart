import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  // 轮播图数据
  // Widget _swiperWidget(){

  // }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          RaisedButton(
            child: Text("跳转到搜索组件"),
            onPressed: (){
              Navigator.pushNamed(context, "/search");
            },
          )
        ],
      ),
    );
  }
}