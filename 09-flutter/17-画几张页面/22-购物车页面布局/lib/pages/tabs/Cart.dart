import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import '../../services/ScreenAdapter.dart';
// import 'package:provider/provider.dart';
// import '../../provider/Cart.dart';

import '../Cart/CartItem.dart';

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
    ScreenAdapter.init(context);

    // var cartProvider = Provider.of<Cart>(context);

    return Scaffold(
      appBar: AppBar(
        title: Text("购物车"),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.launch),
            onPressed: null,
          )
        ],
      ),
      body: Stack(
        children: <Widget>[
          ListView(
            children: <Widget>[CartItem(), CartItem(), CartItem()],
          ),
          Positioned(
            bottom: 0,
            width: ScreenAdapter.width(750),
            height: ScreenAdapter.height(78),
            child: Container(             
              decoration: BoxDecoration(
                border: Border(
                  top: BorderSide(
                    width: 1,
                    color: Colors.black12
                  )
                ),
                 color: Colors.white,
              ),
              width: ScreenAdapter.width(750),
              height: ScreenAdapter.height(78),           
              child: Stack(
                children: <Widget>[
                  Align(
                    alignment: Alignment.centerLeft,
                    child: Row(
                      children: <Widget>[
                        Container(
                          width: ScreenAdapter.width(60),
                          child: Checkbox(
                            value: true,
                            activeColor: Colors.pink,
                            onChanged: (val) {},
                          ),
                        ),
                        Text("全选")
                      ],
                    ),
                  ),
                  Align(
                     alignment: Alignment.centerRight,
                     child: RaisedButton(
                       child: Text("结算",style: TextStyle(
                         color: Colors.white
                       )),
                       color:Colors.red,
                       
                       onPressed: (){

                       },
                     ),
                  )
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}
