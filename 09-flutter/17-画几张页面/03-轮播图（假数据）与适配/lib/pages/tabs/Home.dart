import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
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
      height: ScreenUtil.getInstance().setHeight(42),
      margin: EdgeInsets.only(left:ScreenUtil.getInstance().setWidth(20)),
      padding: EdgeInsets.only(left: ScreenUtil.getInstance().setWidth(20)),
      decoration: BoxDecoration(
        border: Border(
          left: BorderSide(
            color: Colors.red,
            width: ScreenUtil.getInstance().setWidth(10)
          )
        )
      ),
      child: Text(value,style: TextStyle(
        color: Colors.black54
      ),),
    );
  }

  @override
  Widget build(BuildContext context) {
    ScreenUtil.instance = ScreenUtil(width: 750, height: 1334)..init(context);

    return ListView(
      children: <Widget>[
        // 轮播图
        _swiperWidget(),
        SizedBox(
          height: 10,
        ),
        // 猜你喜欢
        _titleWidget("猜你喜欢"),
        SizedBox(
          height: 10,
        ),
        // 热门推荐
         _titleWidget("热门推荐"),
      ],
    );
  }
}
