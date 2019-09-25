import 'package:flutter/material.dart';

import '../pages/Tabs.dart';

import '../pages/Device.dart';

import '../pages/Location.dart';

import '../pages/ImagePicker.dart';

import '../pages/ChewieVideo.dart';

import '../pages/Network.dart';

import '../pages/Storage.dart';

import '../pages/Scan.dart';

import '../pages/AppVersion.dart';

import '../pages/UrlLauncher.dart';
import '../pages/AliPay.dart';



//配置路由
final routes={
      '/':(context)=>Tabs(),
      // '/device':(context)=>DevicePage(),
      // '/location':(context)=>LocationPage(),
      // '/imagePicker':(context)=>ImagePickerPage(),      
      // '/chewieVideo':(context)=>ChewieVideoDemo(),   
      // '/alipay':(context)=>AliPay(),
      '/network':(context)=>NetworkPage(),  
      '/storage':(context)=>StoragePage(),
      // '/scan':(context)=>ScanPage(),
      // '/appVersion':(context)=>AppVersionPage(),
      // '/urlLauncher':(context)=>UrlLauncher()
};

//固定写法
var onGenerateRoute=(RouteSettings settings) {
      // 统一处理
      final String name = settings.name; 
      final Function pageContentBuilder = routes[name];
      if (pageContentBuilder != null) {
        if (settings.arguments != null) {
          final Route route = MaterialPageRoute(
              builder: (context) =>
                  pageContentBuilder(context, arguments: settings.arguments));
          return route;
        }else{
            final Route route = MaterialPageRoute(
              builder: (context) =>
                  pageContentBuilder(context));
            return route;
        }
      }
};