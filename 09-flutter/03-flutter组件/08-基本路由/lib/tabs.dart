// 有状态的无状态的 
import 'package:flutter/material.dart';
import './views/Home.dart';
import './views/Search.dart';
import './views/Settings.dart';

class Tabs extends StatefulWidget {
  @override
  _TabsState createState() => _TabsState();
}

class _TabsState extends State<Tabs> {
  int _crrentIndex = 0;
  List _pageList = <Widget>[
    Home(),
    Search(),
    Settings()
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Hello"),),
      body: this._pageList[this._crrentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: this._crrentIndex,
        onTap: (int index){
          setState(() {
           this._crrentIndex = index; 
          });
        },
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text("首页")
          ),BottomNavigationBarItem(
            icon: Icon(Icons.search),
            title: Text("搜索")
          ),BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            title: Text("设置")
          )
        ],
      ),
    );
  }
}