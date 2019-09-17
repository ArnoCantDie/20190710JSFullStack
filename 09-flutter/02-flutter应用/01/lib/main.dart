import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart'; // flutter中的UI库
import "./widget/SelfText.dart";

void main(){
  runApp(MyApp());
}
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "App",
      theme: ThemeData(
        primaryColor: Colors.pink
      ),
      home: SelfText(),  
    );
  }
}

