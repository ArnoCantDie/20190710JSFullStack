import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';

void main()=>runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text("定位"),),
        body: PosionDemo(),
      ),
    );
  }
}

class PosionDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 10,
      // runSpacing: 10,
      // direction: Axis.vertical,
      alignment: WrapAlignment.spaceEvenly,
      runAlignment: WrapAlignment.spaceEvenly,
      children: <Widget>[
        // .....
        RaisedButton(
          child: Text("第1集"),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text("第2集"),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text("第3集"),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text("第4集"),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text("第5集"),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text("第6集"),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text("第7集"),
          onPressed: (){},
        ),
      ],
    );
  }
}




