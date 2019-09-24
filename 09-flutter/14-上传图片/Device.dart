import 'package:flutter/material.dart';
import 'package:device_info/device_info.dart';

class DevicePage extends StatefulWidget {
  DevicePage({Key key}) : super(key: key);

  _DevicePageState createState() => _DevicePageState();
}

class _DevicePageState extends State<DevicePage> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    this._getDevice();
  }
  _getDevice() async{
    // 得到设备信息
    DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
    // 得到android手机上的设备信息
    AndroidDeviceInfo androidInfo = await deviceInfo.androidInfo;
    print(".....");
    print('设备号 ${androidInfo.androidId}');  // 设备号 a0f47c1d9028477c
    print(".....");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Flutter Native Device演示"),
      ),
      body: Text("看控制台 信息已经打印到控制台了"),
    );
  }
}