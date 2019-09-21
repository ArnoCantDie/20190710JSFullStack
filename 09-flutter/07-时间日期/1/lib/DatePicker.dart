import "package:flutter/material.dart";
import 'package:date_format/date_format.dart';

class DatePickerDemo extends StatefulWidget {
  @override
  _DatePickerDemoState createState() => _DatePickerDemoState();
}

class _DatePickerDemoState extends State<DatePickerDemo> {

  _showDataPicker() async {
    // showDatePicker 调用flutter内置的datepicker
    // showDatePicker(
    //   context: context,
    //   initialDate: DateTime.now(),
    //   firstDate: DateTime(1980),
    //   lastDate: DateTime(2100)
    // ).then((result){
    //   print(result);  //  2019-09-30 00:00:00.000
    // });

    var result = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(1980),
      lastDate: DateTime(2100)
    );
    // print(result); // 2019-09-28 00:00:00.000
  }
  
  
  @override
  void initState() {
    
    print("....");
    // DateTime _nowDate = DateTime.now();  // 得到当前时间
    // print(_nowDate);  // 2019-09-21 02:38:23.934684

    // DateTime _nowDate = DateTime(1989, 2, 21);  // 1989-02-21 00:00:00.000
    // print(_nowDate);

    // DateTime _nowDate = DateTime(1989, 2, 21);
    // var r = formatDate(_nowDate,[yyyy, '-', mm, '-', dd]);
    // print(r);  // 1989-02-21

    // DateTime _nowDate = DateTime.now();
    // var r = formatDate(_nowDate,[HH, ':', nn, ':', ss]);
    // print(r);  // 02:45:33

    // DateTime _nowDate = DateTime.now();
    // print(_nowDate.millisecondsSinceEpoch);  // 1569034049327

    // 1970年01月19   从服务器得到的一般都是一个时间戳
    // print(formatDate(DateTime.fromMicrosecondsSinceEpoch(1569034049327),[yyyy,"年",mm,"月",dd]));

    print("....");

    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("日期处理"),),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          InkWell(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text("2019年09月09日"),
                Icon(Icons.arrow_drop_down)
              ],
            ),
            onTap: _showDataPicker,
          )
        ],
      ),
    );
  }
}