// 导入  别人导出a,b，导入也是导入a,b
// import {a,d} from "./out"
// console.log(a,d)

// 如果别人导出时，起了一个别名，导入时也是导入这个别名
// import {hello,b} from "./out"
// console.log(hello,b)

// 导入时起别名  如果导入时起别名了，使用时也是使用这个别名
// import {a as haha,b} from "./out"
// console.log(haha,b)

// 导出和导入都是动态的
// import {a,b} from "./out"
// setInterval(()=>{
//     console.log(a,b)
// },1000)

// import也会提升  var 

// console.log(a,b)

// import放在最顶部，外面不能if
// if(true){
//     import {a,b} from "./out"
// }

// import {a as haha,b} from "./out"
// import * as obj from "./out.js"
// {a:1,b:2}
// console.log(obj.a,obj.b)

// import {a,mydefault} from "./out"

// import { default as haha } from "./out"
// console.log(haha)

// import * as obj from "./out"
// console.log(obj.default)

// import {default as ABC} from "./out"
// console.log(ABC)

// import  ABC from "./out"
// console.log(ABC)

// import {default as abc} from "./out"
// console.log(abc)

import abc from "./out"
console.log(abc)



















