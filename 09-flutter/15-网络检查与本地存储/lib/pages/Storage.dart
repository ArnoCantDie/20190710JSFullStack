import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../common/Storage.dart';

class StoragePage extends StatefulWidget {
  StoragePage({Key key}) : super(key: key);

  _StoragePageState createState() => _StoragePageState();
}

class _StoragePageState extends State<StoragePage> {

  _getData() async {
    var username = await Storage.getString("name");
    print(username);
  }

  _removeData() async {
    await  Storage.remove("name");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("本地存储"),
      ),
      body: Center(
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          RaisedButton(
            child: Text('保存数据'),
          ),
          SizedBox(height: 10),
          RaisedButton(
            child: Text('获取数据'),
            onPressed: _getData,
          ),
           SizedBox(height: 10),
          RaisedButton(
            child: Text('清除数据'),
            onPressed: _removeData,
          )         
        ]),
      ),
    );
  }
}
