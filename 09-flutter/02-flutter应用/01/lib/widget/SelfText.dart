import 'package:flutter/material.dart'; // flutter中的UI库

class SelfText extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("hello flutter")),
      body: Center(
        child: Text(
          "dart hello dart hello dart hello dart hello dart hello",
          style: TextStyle(
            fontSize: 30,
            color: Colors.red,
            letterSpacing: 2,
            fontWeight: FontWeight.w800
          ),
          overflow: TextOverflow.ellipsis,
          maxLines: 1,
          ),
      ),
    );
  }
}