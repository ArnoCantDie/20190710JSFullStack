import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child:Padding(
        padding: EdgeInsets.all(20),
        child: ListView(children: [
          // RaisedButton(
          //   child: Text('Device 或者设备信息'),
          //   onPressed: () {
          //     Navigator.pushNamed(context, '/device');
          //   },
          // ),
          // SizedBox(height: 10),
          // RaisedButton(
          //   child: Text('Location 获取地理定位'),
          //   onPressed: () {
          //     Navigator.pushNamed(context, '/location');
          //   },
          // ),
          // SizedBox(height: 10),
          // RaisedButton(
          //   child: Text('拍照 上传'),
          //   onPressed: () {
          //     Navigator.pushNamed(context, '/imagePicker');
          //   },
          // ),
          // SizedBox(height: 10),
          // RaisedButton(
          //   child: Text('video_player+chewie播放视频'),
          //   onPressed: () {
          //     Navigator.pushNamed(context, '/chewieVideo');
          //   },
          // ),
          // SizedBox(height: 10),
          // RaisedButton(
          //   child: Text('connectivity 网络'),
          //   onPressed: () {
          //     Navigator.pushNamed(context, '/network');
          //   },
          // ),
          SizedBox(height: 10),
          RaisedButton(
            child: Text('本地存储'),
            onPressed: () {
              Navigator.pushNamed(context, '/storage');
            },
          ),
          // SizedBox(height: 10),
          // RaisedButton(
          //   child: Text('扫码（条形码、二维码）'),
          //   onPressed: () {
          //     Navigator.pushNamed(context, '/scan');
          //   },
          // ),
          // SizedBox(height: 10),
          // RaisedButton(
          //   child: Text('检查版本升级app'),
          //   onPressed: (){
          //       Navigator.pushNamed(context, '/appVersion');
          //   }
          // ),
          // SizedBox(height: 10),
          // RaisedButton(
          //   child: Text('urlLauncher'),
          //   onPressed: (){
          //       Navigator.pushNamed(context, '/urlLauncher');
          //   }
          // )
          // RaisedButton(
          //   child: Text('支付宝支付'),
          //   onPressed: () {
          //     Navigator.pushNamed(context, '/alipay');
          //   },
          // ),
        ]),
    ));
  }
}
