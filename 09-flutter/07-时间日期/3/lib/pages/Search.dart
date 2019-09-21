import 'package:flutter/material.dart';

class SearchPage extends StatelessWidget {
  // const SearchPage({Key key}) : super(key: key);

  final arguments;
  SearchPage({this.arguments});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
        title: Text("搜索页面"),
      ) ,
      // body: Text("搜索页面内容区域"),
      body: Text("${arguments['id']}"),
    );
  }
}
