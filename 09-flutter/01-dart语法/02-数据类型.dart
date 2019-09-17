// var  const   final 
// 在dart中使用var来声明的变量，没有提升
// 在dart中使用var来声明的变量，没有重复声明
// 和JS一样，使用Var来声明的变量，后面可以跟任意的数据类型 
// dart中是没有undefined   如果一个变量没有赋值，它的值null
// 使用var声明变量，会自动推导类型，变量类型一旦固定了，就不能再赋其它类型了

// void main(){
  // var a = true;
  // var a = "hello";
  // var a;
  // print(a);


  // var a = 110;  // 先声明一个变量a  值是110
  // a = "hello";
  // print(a);
  
// }

// -----------------------------------
// 使用final定义的常量，也不能重复定义 
// 使用final定义的常量，肯定是不能修改值的

// final b = 110;  // 定义常量
// final b = 111;

// final b = 110;
// b = 111;

// void main(){
//   print(b);
// }

// --------------------------------------- 
// const也dart中也可以定义一个常量
// final和const都可以定义常量
// 使用final和const声明的常量上来就要赋值
// final c; 
// c = 110;
// void main(){
  // print(c);
// }

// ----------------------
// 相同点：一旦声明了，不能再赋值，声明和赋值要同时进行 
// 不同点：
//    1，final声明之后，可以修改(对象),const声明之后不能修改
//    2，final后面可以写函数返回值   const不可以写
//       const比final要求更加严格
//       const 基本不用   final用的比较多

// b = 110;
// 
// b["name"] = "hello";
//  print(b);
// void main(){
//   final b = {"name":"wangcai"};
//   b["name"] = "xiaoqiang";
//   print(b);
// }

// -----------------------------------


// int sum(m,n) => m+n;

// void main(){
//   // var r = sum(1, 2);  // var 
//   // final r = sum(1, 2);
//   // const r = sum(1, 2);
//   print(r);
// }

// ------------------------------------------
//  ?? 就是JS中的三元运算符
// void main(){
  // var a = 100;
  // var r =  a ?? 666;
  // print(r);

  // var str1 = "hello";
  // var str2 = "world";
  // var r =  str1 ?? str2;
  // print(r);
// }

// --------------------------------
// var  const  fanil

// 数据类型
// 数值型 Number  整数 int  小数 float double
// 字符串 String
// 布尔值 Boolean
// 列表 List   数组
// 键值对 Map   键值对
// Runes、Symbols (不常用)

// void main(){
  // int b = 110; // 声明一个变量b，b是int类型
  // // b = 'hello'
  // print(b);

  // double a = 4.21;
  // a = 1;
  // print(a);  // 1.0

  // String str = "hello"; 
  // String str = '''
  //   hello 
  //   world
  //   abc
  // ''';
  // print(str);

  // int a = 110; 
  // String str = "hello ${a} world";
  // print(str);

  // String str = "hello";
  // print(str*3);

  // String str1 = "hello";
  // String str2 = "world";
  // print(str1+str2);

  // ------------------------------------------------------

  // List list = [1, 2, 3, "hello", true];
  // print(list);  // [1, 2, 3, hello, true]

  // 声明一个不可以改变的数组
  // List list2 = const[1,2,3];
  // list2[0] = 111;  
  // print(list2);

  // 声明一个指定类型的数组
  // List list3 = <int>[1, 2, 3];
  // print(list3);

  // List是一个对象  new  肯定有很多方法对list进行CRUD
  // List list4 = new List();
  

  // [], length
  // add(), insert() // insert 第一项是索引，第二项是 value
  // remove(), clear()
  // forEach() // 遍历数组，参数是一个匿名函数
  // indexOf(), lastIndexOf()...

  // --------------------------------------

  // Map (键值对)
  // 创建 Map： Map language = { "first": "dart", "second": "java" };
  // 创建不可变的 Map： Map language = const { "first": "dart", "second": "java" };
  // 构造创建： Map language = new Map();
  // dart中肯定有很多的方法去操作Map 

  // [], length
  // isEmpty, isNotEmpty
  // keys, values
  // forEach()

// }

// --------------------------------------------



