import 'package:flutter/material.dart';

class CartPage extends StatefulWidget {
  CartPage({Key key}) : super(key: key);

  _CartPageState createState() => _CartPageState();
}

class _CartPageState extends State<CartPage> {

  @override
  void initState() { 
    super.initState();
    print("cart");
  }
  @override
  Widget build(BuildContext context) {
    return Text("购物车页面");
  }
}