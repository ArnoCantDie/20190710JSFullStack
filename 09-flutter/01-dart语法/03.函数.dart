// 定义一个函数
// String 函数的返回值是String类型
// getPerson函数名
// String name形参的类型  name传的话必须是String
// int age  age传的话必须是int类型

// 和JS中的函数相比，限定了形参的类型，和函数返回值的类型
String getPerson(String name,int age){
  // ${name}  $name
  return "name=$name,age=$age";
}
void main(){
  String str =  getPerson("Wangcai",1000);
  print(str); // name=Wangcai,age=1000
}