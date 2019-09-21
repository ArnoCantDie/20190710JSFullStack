import '../pages/Tabs.dart';
import '../pages/Form.dart';
import '../pages/Search.dart';

// 配置路由规则 
final routes = {
  "/":()=>Tabs(),
  "/form":()=>FormPage(),
  "/search":()=>SearchPage(),
};