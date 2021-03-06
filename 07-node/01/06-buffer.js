// https://juejin.im/post/5d3a3b8ff265da1b8d166323
// https://juejin.im/post/5b29b1ae6fb9a00e706865f9
// buffer是指内存中的数据 <Buffer 30 31 32 33 34 35 36 37 38 39>

// let b1 = Buffer.from("10") // 字符串
// console.log(b1)  // <Buffer 31 30>  31-->49   30-->48

// 在utf8中 一个汉字占三个字节  G  T
// 位     byte
// 字节     1Bit = 8byte
//  千字节     1KB = 1024Bit
// 兆     1MB = 1024KB
// G     1GB = 1024MB
// T     1T = 1024G
// P     1P = 1024T
// E     1E = 1024P
// Z     1Z = 1024E
// .......
// 100M / 8 下载速度 ----> 
// 40M / 4M 
// 500G  ----> 400多   1000
// let b1 = Buffer.from("你好")
// console.log(b1)

// let b1 = Buffer.from([10])  // 写数组表示放了数字
// console.log(b1) // <Buffer 0a>  10 

// let b1 = Buffer.from([10]) 
// let b2 = Buffer.from(b1)
// console.log(b2)

// let b1 = Buffer.alloc(10) // 开一块内存空间，大小为10个字节，把这10个空间的垃圾数据全部清空
// console.log(b1)

// <Buffer f0 4e 63 ba e1 01 00 00 f0 4e>
// let b1 = Buffer.allocUnsafe(10) // 开一块内存空间，大小为10个字节，只管分配空间，不管清空里面的垃圾数据
// console.log(b1)

// const b1 = Buffer.from('hello world');
// console.log(b1.toString(2))

// let b = Buffer.from("中")
// b = b.toString("base64")
// console.log(b)  // 5Lit

// let b = Buffer.from("中")
// console.log(b)  // <Buffer e4 b8 ad>

// console.log((0xe4).toString(2)) // 11100100
// console.log((0xb8).toString(2)) // 10111000
// console.log((0xad).toString(2)) // 10101101

// 00111001 00001011 00100010 00101101
// console.log(parseInt("00111001",2)) // 57
// console.log(parseInt("00001011",2))  // 11
// console.log(parseInt("00100010",2))  // 34
// console.log(parseInt("00101101",2))  // 45

// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// str += str.toLowerCase();
// str += "0123456789+/";
// console.log(str[57]+str[11]+str[34]+str[45])  // 5Lit