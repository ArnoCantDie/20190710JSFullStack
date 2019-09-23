import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:dio/dio.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String _news = "";
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  void _getData() async {
    var apiUrl = "http://192.168.0.103:3000/news";
    Response  response = await Dio().get(apiUrl);
    print(response.data);  // {"msg":"这是新闻数据"}
    print(response.data is String);  // false
    print(response.data is Map);  // true
    
  }

  void _postData() async {
    var apiUrl = "http://192.168.0.103:3000/dologin";
    Map jsonData = {
      "username":"wangcai",
      "age":10
    };
    Response  response = await Dio().post(apiUrl,data: jsonData);
    print(response.data);  // {msg: post成功}
  }
 
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text(this._news),
          RaisedButton(
            child: Text("Dio Get请求数据"),
            onPressed: _getData,
          ),
          RaisedButton(
            child: Text("Dio Post请求数据"),
            onPressed: _postData,
          ),
          RaisedButton(
            child: Text("Dio 请求数据并渲染数据"),
            onPressed: (){
              Navigator.pushNamed(context, "/http");
            },
          ),
          
        ],
      ),
    );
  }
}
