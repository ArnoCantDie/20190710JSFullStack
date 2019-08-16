// Buffer.from()   Buffer.alloc()   Buffer.allocUnsafe()

// node中都是utf8  在utf8中一个汉字占三个字节
// 一个字节有8位   01010101 --> 11111111   255
// let b = Buffer.from("中")
// console.log(b) // <Buffer e4 b8 ad>

// let b = Buffer.from("中")
// console.log(b.toString()) // 中  toString()没有写东西，默认就是utf8
// console.log(b.toString("utf8")) // 中

// let b = Buffer.from("中")
// console.log(b)  // <Buffer e4 b8 ad>
// console.log(b.toString("base64")) // 5Lit

// 中  汉字  3个字节 把16进制转成2进制 <Buffer e4 b8 ad>
// 0x打头表示一个16进制的数  (0xe4).toString(2) 把16进制转成2进制
// console.log((0xe4).toString(2))  // 11100100
// console.log((0xb8).toString(2))  // 10111000
// console.log((0xad).toString(2))  // 10101101

// 111001001011100010101101  三个字节有24位  3*8 = 4*6
// 00111001 00001011 00100010 00101101

// 00111001 00001011 00100010 00101101把二进制转成10进制
// console.log(parseInt('00111001',2)) // 57
// console.log(parseInt('00001011',2)) // 11
// console.log(parseInt('00100010',2)) // 34
// console.log(parseInt('00101101',2)) // 45

// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// str += str.toLowerCase()
// str += "0123456789+/"
// console.log(str[57]+str[11]+str[34]+str[45])  // 5Lit

// 操作buffer的api copy
// let b1 = Buffer.from("中")
// let b2 = Buffer.from("国")
// let c = Buffer.alloc(6)
// b1.copy(c,0,0,3)
// b2.copy(c,3,0,3)
// console.log(c) // <Buffer e4 b8 ad e5 9b bd>

// let b1 = Buffer.from("中")
// let b2 = Buffer.from("国")
// let c = Buffer.alloc(5)
// b1.copy(c,0,0,3)
// b2.copy(c,3,0,3)
// console.log(c) // <Buffer e4 b8 ad e5 9b>
// console.log(c.toString()) // 中�

// let b1 = Buffer.from("中")
// let b2 = Buffer.from("国")
// let c = Buffer.concat([b1,b2])  
// console.log(c)  // <Buffer e4 b8 ad e5 9b bd>
// console.log(c.toString()) // 中国

