import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart'; // flutter中的UI库

void main() {
  // new Center表示创建一个Center组件
  runApp(MyApp());
}

// 自定义组件   写类   无状态组件
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Flutter"),
        ),
        body: HomeContent(),
      ),
    );
  }
}

// 自定义一个组件
class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: EdgeInsets.all(10),
      children: <Widget>[
        ListTile(
          leading: Icon(Icons.settings,size: 28,),
          title: Text(
            "地方考察中，习近平频频强调这件事",
            style: TextStyle(
              fontSize: 16
            ),
          ),
          subtitle: Text(
            "中国必须搞实体经济，制造业是实体经济的重要基础，自力更生是我们奋斗的基点",
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
        ),
         ListTile(
          leading: Icon(Icons.home,size: 28,),
          title: Text(
            "地方考察中，习近平频频强调这件事",
            style: TextStyle(
              fontSize: 16
            ),
          ),
          subtitle: Text(
            "中国必须搞实体经济，制造业是实体经济的重要基础，自力更生是我们奋斗的基点",
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
        ),
         ListTile(
          leading: Icon(Icons.search,size: 28,),
          title: Text(
            "地方考察中，习近平频频强调这件事",
            style: TextStyle(
              fontSize: 16
            ),
          ),
          subtitle: Text(
            "中国必须搞实体经济，制造业是实体经济的重要基础，自力更生是我们奋斗的基点",
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
        )
      ],
    );
  }
}
