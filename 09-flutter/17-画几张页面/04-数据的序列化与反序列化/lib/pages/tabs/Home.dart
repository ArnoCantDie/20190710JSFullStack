import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';
import "dart:convert";
// import 'package:flutter_screenutil/flutter_screenutil.dart';
import '../../services/ScreenAdaper.dart';
import '../../model/FocusModel.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List _focusData = []; // 放轮播图数据
  // 调用轮播图的api接口
  _getFocusData() async{
    var apiUrl = "";
    var result =  await Dio().get(apiUrl);
    // result是一个json字符串 result.data
    var focusList = FocusModel.fromJson(result.data);
    setState(() {
     this._focusData = focusList;
    });

  }

  // 轮播图数据
  Widget _swiperWidget() {
    List<Map> imgList = [
      {
        "url":
            "http://imgcps.jd.com/ling4/8144215/57qk57u06KKr5aW96LSn5Yir6LWw/562J5L2g5p2l6YCJ6LSt/p-5c13869682acdd181deefeda/7a04f6f8/cr_1125x445_0_171/s1125x690/q70.jpg"
      },
      {
        "url":
            "http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/66664/10/11120/198164/5d8abd6fE02831e96/8683ed135d1e096f.jpg!cr_1125x445_0_171!q70.jpg.dpg"
      },
      {
        "url":
            "http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/81028/38/10523/85306/5d807bf9Eedaddcca/c3d0f27af99b0ba8.jpg!cr_1125x445_0_171!q70.jpg.dpg"
      },
    ];
    return Container(
      child: AspectRatio(
          aspectRatio: 2 / 1,
          child: Swiper(
            itemBuilder: (BuildContext context, int index) {
              return new Image.network(
                imgList[index]["url"],
                fit: BoxFit.fill,
              );
            },
            itemCount: imgList.length,
            pagination: new SwiperPagination(),
            autoplay: true,
          )),
    );
  }

  // 猜你喜欢，热门推荐的文本
  Widget _titleWidget(value) {
    return Container(
      height: ScreenAdaper.height(45),
      margin: EdgeInsets.only(left:ScreenAdaper.width(20)),
      padding: EdgeInsets.only(left: ScreenAdaper.width(20)),
      decoration: BoxDecoration(
        border: Border(
          left: BorderSide(
            color: Colors.red,
            width: ScreenAdaper.width(10)
          )
        )
      ),
      child: Text(value,style: TextStyle(
        color: Colors.black54
      ),),
    );
  }

  // 猜你喜欢下面的水平的ListView
  _hotProductListWidget(){
    return Container(
      height: ScreenAdaper.height(200),
      child: ListView(

      ),
    );
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    // 序列化操作
    // var strData = '{"name":"wangcai","age":20}';
    // // 把JSON字符串转成Map类型
    // print(json.decode(strData));
    // print(json.decode(strData) is Map); // true
    // var res = json.decode(strData);
    // print(res["name"]);  // wangcai

    // 反序列化操作
    // var strData = {"name":"wangcai","age":20};
    // print(json.encode(strData));
    // print(json.encode(strData) is String); // true

    // 如果项目接口复杂时，一般不会手动进行序列化处理
    // https://javiercbk.github.io/json_to_dart/  需要提供JSON字符串数据--->Model类

    // var str = '{"_id":"67890fsadf56789fsadf","title":"手机","status":"1","url":"abc"}';
    // var focus = FocusModel.fromJson(json.decode(str));
    // print(focus.sId);
    // print(focus.title);
    // print(focus.url);



  }

  @override
  Widget build(BuildContext context) {
    // ScreenUtil.instance = ScreenUtil(width: 750, height: 1334)..init(context);
    ScreenAdaper.init(context);

    return ListView(
      children: <Widget>[
        // 轮播图
        _swiperWidget(),
        SizedBox(
          height: ScreenAdaper.height(20),
        ),
        // 猜你喜欢
        _titleWidget("猜你喜欢"),
        SizedBox(
          height: ScreenAdaper.height(20),
        ),
        // 猜你喜欢下面的水平的ListView
        _hotProductListWidget(),
        // 热门推荐
         _titleWidget("热门推荐"),
      ],
    );
  }
}
