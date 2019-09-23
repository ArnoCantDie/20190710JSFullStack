import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

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
    print(".......................");
    // Map userInfo = {"username": "wangcai", "age": 100};
    // // 把对象转成字符串
    // print(json.encode(userInfo));  // {"username":"wangcai","age":100}
    // print(json.encode(userInfo) is String);  // true
    // print(json.encode(userInfo) is Map);  // false

    // String userInfo = '{"username": "wangcai", "age": 100}';
    // print(json.decode(userInfo)); // {username: wangcai, age: 100}
    // print(json.decode(userInfo) is String);  // false
    // print(json.decode(userInfo) is Map);  //  true

    var apiUrl = "http://192.168.0.103:3000/news";

    var result = await http.get(apiUrl);
    // print("....");
    // print(result); // Instance of 'Response'
    // print("....");
    if (result.statusCode == 200) {
      // print(result.body);  // {"msg":"这是新闻数据"}
      setState(() {
        this._news = json.decode(result.body)["msg"];
      });
    }
  }

  void _postData() async {
    var apiUrl = "http://192.168.0.103:3000/dologin";

    var result = await http.post(apiUrl,body: {"username":"wangcai","age":"10"});

    if (result.statusCode == 200) {
      print(json.decode(result.body));  //{msg: post成功}
    }else{
      print(result.statusCode);
    }
  }
 
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text(this._news),
          RaisedButton(
            child: Text("Get请求数据"),
            onPressed: _getData,
          ),
          RaisedButton(
            child: Text("Post请求数据"),
            onPressed: _postData,
          ),
          RaisedButton(
            child: Text("请求数据并渲染数据"),
            onPressed: (){
              Navigator.pushNamed(context, "/http");
            },
          ),
        ],
      ),
    );
  }
}
