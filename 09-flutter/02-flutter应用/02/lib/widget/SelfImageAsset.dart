import 'package:flutter/material.dart';

class SelfImageAsset extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // return Text("image");
    return Scaffold(
      appBar: AppBar(title: Text("SelfImage"),),
      body: Center(
        child: Image(
          image: AssetImage("images/logo.jpg")
        ),
      ),
    );
  }
}