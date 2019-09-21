import 'package:flutter/material.dart';
import 'package:myapp/routes/Routes.dart' as prefix0;

import 'pages/Tabs.dart';
import 'pages/Form.dart';
import 'pages/Search.dart';

import 'routes/Routes.dart';

void main() => runApp(MyApp());
class MyApp extends StatelessWidget {  
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // home:Tabs(),
      // routes: {
      //   "/form":(context)=>FormPage(),
      //   "/search":(context)=>SearchPage(),
      // },
      initialRoute: "/",  // 默认访问路径
      onGenerateRoute: onGenerateRoute
    );
  }
}
