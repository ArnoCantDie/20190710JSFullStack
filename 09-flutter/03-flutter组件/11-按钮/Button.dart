import 'package:flutter/material.dart';

class ButtonPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("按钮练习"),
        centerTitle: true,
        leading: IconButton(
          icon: Icon(Icons.menu),
        ),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.settings),
          )
        ],
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              RaisedButton(
                child: Text("普通按钮"),
                onPressed: () {
                  print("普通按钮");
                },
              ),
              SizedBox(width: 5),
              RaisedButton(
                child: Text("颜色按钮"),
                color: Colors.blue,
                textColor: Colors.white,
                onPressed: () {
                  print("颜色按钮");
                },
              ),
              SizedBox(width: 5),
              RaisedButton(
                child: Text("阴影按钮"),
                color: Colors.blue,
                textColor: Colors.white,
                elevation: 10,
                onPressed: () {
                  print("阴影按钮");
                },
              ),
            ],
          ),
          Row(
            children: <Widget>[
              SizedBox(width: 5),
              RaisedButton.icon(
                icon: Icon(Icons.search),
                label: Text("图标按钮"),
                color: Colors.blue,
                textColor: Colors.white,
                elevation: 10,
                onPressed: () {
                  print("图标按钮");
                },
              ),
              Container(
                width: 200,
                height: 50,
                child: RaisedButton(
                  child: Text("自定义按钮"),
                  textColor: Colors.white,
                  color: Colors.pink,
                  onPressed: () {},
                ),
              ),
            ],
          ),
          SizedBox(height: 5),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Expanded(
                child: Container(
                  height: 50,
                  child: RaisedButton(
                    child: Text("自定义按钮"),
                    textColor: Colors.white,
                    color: Colors.green,
                    onPressed: () {},
                  ),
                ),
              )
            ],
          ),
          SizedBox(height: 5),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              RaisedButton(
                child: Text("圆角按钮"),
                textColor: Colors.white,
                color: Colors.blue,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20)),
                onPressed: () {},
              ),
              SizedBox(width: 5),
              Container(
                height: 80,
                child: RaisedButton(
                  child: Text("圆形按钮"),
                  textColor: Colors.white,
                  color: Colors.blue,
                  shape: CircleBorder(
                    side: BorderSide(color: Colors.white)
                  ),
                  onPressed: () {},
                ),
              )
            ],
          ),
        ],
      ),
    );
  }
}
