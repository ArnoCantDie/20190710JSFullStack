import 'package:flutter/material.dart';

class Category extends StatefulWidget {
  Category({Key key}) : super(key: key);
  @override
  _CategoryState createState() => _CategoryState();
}

class _CategoryState extends State<Category> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.grey,
          title: Row(
            // mainAxisAlignment: MainAxisAlignment.end,
            // crossAxisAlignment: CrossAxisAlignment,
            children: <Widget>[
              Expanded(
                child: TabBar(
                  indicatorColor: Colors.red,
                  labelColor: Colors.red,
                  indicatorSize: TabBarIndicatorSize.label,
                  isScrollable: true,
                  tabs: <Widget>[
                    Tab(text: "后端"),
                    Tab(text: "前端"),
                    Tab(text: "移动端"),
                    // Tab(text: "App"),
                    // Tab(text: "Cocos-2d"),
                    // Tab(text: "Vue"),
                    // Tab(text: "Flutter"),
                    // Tab(text: "React"),
                    // Tab(text: "小程序"),
                    // Tab(text: "webapp"),
                  ],
                ),
              ),
            ],
          ),
        ),
        body: TabBarView(
          children: <Widget>[
            ListView(
              children: <Widget>[
                ListTile(title: Text("1")),
                ListTile(title: Text("1")),
                ListTile(title: Text("1")),
              ],
            ),ListView(
              children: <Widget>[
                ListTile(title: Text("2")),
                ListTile(title: Text("2")),
                ListTile(title: Text("2")),
              ],
            ),ListView(
              children: <Widget>[
                ListTile(title: Text("3")),
                ListTile(title: Text("3")),
                ListTile(title: Text("3")),
              ],
            )
          ],
        ),
      ),
    );
  }
}