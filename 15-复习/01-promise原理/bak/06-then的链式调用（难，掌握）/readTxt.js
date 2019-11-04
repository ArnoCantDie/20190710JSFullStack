// let fs = require("fs")
// function read(path){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,"utf8",function(err,data){
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// then的链式调用  上一个.then要返回一个promise
// read("./name.txt")
// .then(data=>{return read(data)},null)
// .then(data=>{console.log(data)},null);

// 上面说，上一个.then需要返回一个promise
// 但是我们返回了一个123
// 内部会这个写 Promise.resolve(123)  
// 把123包装成promise
// read("./name.txt")
// .then(data=>{return 123},null)
// .then(data=>{console.log(data)},null);

// read("./name.txt")
// .then(data=>{return "hello"},null)  // return Promise.resolve("hello")
// .then(data=>{console.log(data)},null);

// read("./name.txt")
// .then(data=>{return "hello"},err=>{console.log(err)})  // return Promise.resolve("hello")
// .then(data=>{console.log(data)},err=>{console.log(err)});

// 上一个.then要返回一个东西，可以返回一个promise
// 如果不是promise，内部会包装成promise
// 返回给下一个.then
// 如果你就是返回了一个普通值，那么会将这个普通值作为下一个then的成功的结果
// read("./name.txt")
// .then(data=>{return "hello"},err=>{console.log(err)})  // return Promise.resolve("hello")
// .then(data=>{return data},err=>{console.log(err)})
// .then(data=>{return data},err=>{console.log(err)})
// .then(data=>{return data},err=>{console.log(err)})
// .then(data=>{console.log(data)},err=>{console.log(err)})


// 如果上一个.then返回了一个undefined，会作为下一个.then的成功结果
// read("./name.txt")
// .then(data=>{return undefined},err=>{console.log(err)})  // return Promise.resolve("hello")
// .then(data=>{return data},err=>{console.log("err-->",err)})
// .then(data=>{return data},err=>{console.log("err-->",err)})
// .then(data=>{return data},err=>{console.log("err-->",err)})
// .then(data=>{console.log(data)},err=>{console.log("err-->",err)})

 
// read("./name1.txt")
// .then(data=>{return "hello"},err=>{console.log("err1-->",err)}) 
// .then(data=>{return data},err=>{console.log("err2-->",err)})
// .then(data=>{return data},err=>{console.log("err3-->",err)})
// .then(data=>{return data},err=>{console.log("err4-->",err)})
// .then(data=>{console.log("data--->",data)},err=>{console.log("err5-->",err)})



// ----------------------
let fs = require("fs")
function read(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,"utf8",function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    })
}
// 如果能走到下一个then的失败的回调函数？
// 1：返回一个失败的Promise
// 2：抛出一个异常
read("./name.txt").then(data=>{
    return read(data+"lalala")  
 },err=>{
     console.log(err)
 }).then(data=>{  
     console.log(data)
 },err=>{
     console.log(err) 
    //  return Promise.reject("没钱")
    throw new Error("没钱...")
 }).then(data=>{
     console.log("data-->",data) 
 },err=>{
     console.log("err-->",err)
 })

// 现在，不管上一下then返回不返回东西，每一个then都会调用
// 现在，在某个then中，不想再向下走then，怎么做？
// read("./name.txt").then(data=>{
//     return read(data+"lalala")  
//  },err=>{
//      console.log(err)
//  }).then(data=>{  
//      console.log(data)
//  },err=>{
//      console.log(err) 
//      //  返回一个处于pending状态的Promise
//      return new Promise(()=>{});
//  }).then(data=>{
//      console.log("data-->",data) 
//  },err=>{
//      console.log("err-->",err)
//  })



// read("./name.txt").then(data=>{
//     return read(data+"lalala")  
//  },err=>{
//      console.log(err)
//  }).then(data=>{  
//      console.log(data)
//  },err=>{
//      console.log(err) // 
//      return false;  // 在err处理函数中返回的数据，也会作为下一个.then成功的结果
//  }).then(data=>{
//      console.log("data-->",data) 
//  },err=>{
//      console.log("err-->",err)
//  })
//  then可以链式调用，上一个then返回的普通值，无论你是在第1个函数中返回，还是在第2个函数中返回，
// 都会作为下一下then的成功的结果，如果不返回，undefined就作为下一个then的成功的结果


// read("./name.txt").then(data=>{
//    return read(data+"lalala")  // 自己去返回一个Promise，返回给下一个.then
// },err=>{
//     console.log(err)
// }).then(data=>{  // 这个.then没有返回任何东西，会把undefiend作为下一个.then的成功的结果
//     console.log(data)
// },err=>{
//     console.log(err) // ? 
// }).then(data=>{
//     console.log("data-->",data)  // data--> undefined
// },err=>{
//     console.log("err-->",err)
// })





// 如果上一个.then没有返回任何东西，undefined会作下一个then的成功的结果
// read("./name.txt").then(data=>{
//     console.log(data)
// }).then(data=>{
//     console.log(data) // undefined
// })


