import 'package:flutter/material.dart';
import 'package:sy_flutter_alipay/sy_flutter_alipay.dart';
import 'package:dio/dio.dart';

class AliPay extends StatefulWidget {
  AliPay({Key key}) : super(key: key);

  _AliPayState createState() => _AliPayState();
}

class _AliPayState extends State<AliPay> {

  //执行支付宝支付
  _doAliPay() async{

      var serverApi="http://160.238.86.82/alipay/";
      var serverData=await Dio().get(serverApi);
      var payInfo=serverData.data;  

      var result = await SyFlutterAlipay.pay(
          payInfo,
          // urlScheme: '你的ios urlScheme', //前面配置的urlScheme
          // isSandbox: true //是否是沙箱环境，只对android有效
      );
      print("...........");
      print(result);
      print("...........");

  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('AliPay'),
        ),
        body: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                 RaisedButton(
                    child: Text('支付宝支付'),
                    onPressed:_doAliPay,
                )
              ],
            )
        )
    );
  }
}

