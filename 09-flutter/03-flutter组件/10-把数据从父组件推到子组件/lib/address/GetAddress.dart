import 'package:flutter/material.dart';
import './AddressList.dart';

class GetAddress extends StatefulWidget {
  @override
  _GetAddressState createState() => _GetAddressState();
}

class _GetAddressState extends State<GetAddress> {
  String _ads = "";

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        appBar: AppBar(
          title: Text("获取收货地址"),
        ),
        body: Center(
          child: Column(
            // crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              RaisedButton(
                textTheme: ButtonTextTheme.primary,
                color: Theme.of(context).accentColor,
                child: Text("选择收货地址"),
                onPressed: () {
                  // 通过路由跳转从子页面中传递过来的数据，都是异步的
                  Navigator.of(context)
                      .push(MaterialPageRoute(builder: (BuildContext context) {
                    return AddressList();
                  })).then((res){
                    setState(() {
                     _ads = res; 
                    });
                  });

                  // print("hello......");
                  // print(".....$ads");
                  // setState(() {
                  //  _ads = ads; 
                  // });
                },
              ),
              Text("${_ads=='' ? '未查到收货地址':_ads}")
            ],
          ),
        ),
      ),
    );
  }
}
