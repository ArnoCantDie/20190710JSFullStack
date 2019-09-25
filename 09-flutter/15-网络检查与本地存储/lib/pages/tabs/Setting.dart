import 'package:flutter/material.dart';
import '../../common/Storage.dart';


class SettingPage extends StatefulWidget {
  SettingPage({Key key}) : super(key: key);

  _SettingPageState createState() => _SettingPageState();
}

class _SettingPageState extends State<SettingPage> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Column(
          children: <Widget>[
            RaisedButton(
              child: Text("获取Storage保存的数据"),
              onPressed: () async{
                var useranme = await Storage.getString("name");
                print(useranme);
              },
            ),
            SizedBox(height: 20),

            RaisedButton(
              child: Text("设置Storage保存的数据"),
              onPressed: () async{
               await Storage.setString("name", "wangcai");
              },
            ),

            ListTile(
              title: Text("我是一个文本"),
            ),
            ListTile(
              title: Text("我是一个文本"),
            ),
            ListTile(
              title: Text("我是一个文本"),
            ),
            ListTile(
              title: Text("我是一个文本"),
            )
          ],
        )
      ],
    );
  }
}