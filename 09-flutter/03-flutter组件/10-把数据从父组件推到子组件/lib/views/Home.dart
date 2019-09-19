import 'package:flutter/material.dart';
import './Category.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: <Widget>[
          RaisedButton(
            child: Text("跳到分类页面"),
            color: Colors.blue,
            onPressed: (){
              Navigator.of(context).push(
                MaterialPageRoute(
                  // 不需要传值
                  builder: (context)=>Category()
                )
              );
            },
          )
        ],
      ),
    );
  }
}