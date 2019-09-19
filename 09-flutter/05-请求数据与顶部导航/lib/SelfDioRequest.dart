import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'dart:convert';

class SelfDioRequest extends StatefulWidget {
  @override
  _SelfDioRequestState createState() => _SelfDioRequestState();
}

class _SelfDioRequestState extends State<SelfDioRequest> {
  List _list = [];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("dio请求数据"),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () {
          // print(666);
          dio1();
        },
      ),
      body: ListView.builder(
          itemCount: _list.length,
          itemBuilder: (BuildContext context, int i) {
            return Text('${_list[i]["nm"]}');
          }),
    );
  }

  dio1() async {
    Response response =
        await Dio().get("http://m.maoyan.com/ajax/movieOnInfoList");
    Map<String, dynamic> responseData = json.decode(response.toString());
    // print(responseData["movieList"]);
    setState(() {
     this._list =  responseData["movieList"];
    });
  }
}
