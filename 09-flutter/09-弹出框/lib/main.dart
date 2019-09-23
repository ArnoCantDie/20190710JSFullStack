import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'routes/Routes.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        localizationsDelegates: [
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
        ],
        supportedLocales: [
          const Locale('zh','CH'), // 中文
          const Locale('en', 'US'), // English
          const Locale('he', 'IL'), // Hebrew
        ],
        initialRoute: "/", // 默认访问路径
        onGenerateRoute: onGenerateRoute);
  }
}
