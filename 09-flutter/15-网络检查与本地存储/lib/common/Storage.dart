// 封装操作状态的方法 
import 'package:shared_preferences/shared_preferences.dart';

// 浏览器中可以在localstage   cookie   indexDB  
// shared_preferences  存储的数据也是键值对  String类型
class Storage{
  // static表示静态方法  静态方法只能类名来调用  Storage.setString("name","wangcai")
  static Future<void> setString(key,value) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    prefs.setString(key, value);
  }
  static Future<String> getString(key) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    return prefs.getString(key);
  }
  static Future<void> remove(key) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    prefs.remove(key);
  }
}