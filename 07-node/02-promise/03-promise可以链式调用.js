/*
-----------------------------
// vscode中的一个小bug
// 在读取时使用绝对路径
let fs = require("fs")
let path = require("path")
let filename = path.join(__dirname,"name.txt")
fs.readFile(filename,"utf8",(err,data)=>{
    if(err){
        console.log(err)
    }
    fs.readFile(path.join(__dirname,data),"utf8",(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(data)
    })
})
-----------------------------
let fs = require("fs")
// 封装一个函数,函数的功能是读取一个文件的内容
// rest参数  
function readFile(...args){
    return new Promise((resolve,reject)=>{
        fs.readFile(...args,function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    });
}
readFile("./name.txt","utf8").then(data=>{
    console.log(data)  // age.txt
},err=>{
    console.log(err)  
})
-----------------------------
let fs = require("fs")
function readFile(...args){
    return new Promise((resolve,reject)=>{
        fs.readFile(...args,function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    });
}
// 如果name1不存在，走then的第2个函数
readFile("./name1.txt","utf8").then(data=>{
    console.log(data)  
},err=>{
    console.log(err)  // no such file or directory
})
-----------------------------
let fs = require("fs")
function readFile(...args){
    return new Promise((resolve,reject)=>{
        fs.readFile(...args,function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    });
}
// 这样写不优雅， 又回到了回调地域  XXXXXXXXXXXX  
readFile("./name.txt","utf8").then(data=>{
    // console.log(data)  // age.txt
    readFile(data,"utf8").then(data=>{
        console.log(data)  // 666
    },err=>{
        console.log(err)  
    })
},err=>{
    console.log(err)  
})
-----------------------------
let fs = require("fs")
function readFile(...args){
    return new Promise((resolve,reject)=>{
        fs.readFile(...args,function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    });
}
// 在promise中可以链式调用  .then  之后，还可以  .then
// .then之后又返回了一个新的promise
readFile("./name.txt","utf8").then(data=>{
    // console.log(data)  // age.txt
    return false;
},err=>{
    console.log(err)  
}).then(data=>{  // 这里面的data是上一个then中的第个函数的返回值
    console.log(data)  // false
},err=>{

})
-----------------------------
let fs = require("fs")
function readFile(...args){
    return new Promise((resolve,reject)=>{
        fs.readFile(...args,function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    });
}
// 在promise中可以链式调用  .then  之后，还可以  .then
// .then之后又返回了一个新的promise
readFile("./name.txt","utf8").then(data=>{
    // console.log(data)  // age.txt
    return data;
},err=>{
    console.log(err)  
}).then(data=>{   // age.txt
    // console.log(data)  
    // 当return一个data后，下面的代码就不再执行的
    return data
    throw new Error("不OK")
},err=>{

}).then(data=>{
    console.log(data)  // age.txt
},err=>{
    console.log(err) // 不OK
})
-----------------------------
let fs = require("fs")
function readFile(...args){
    return new Promise((resolve,reject)=>{
        fs.readFile(...args,function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    });
}
readFile("./name1.txt","utf8").then(data=>{
    return data;
},err=>{
    return err;
    // console.log(err)  
}).then(data=>{  
    console.log(data)
},err=>{
    console.log(err)
})

-----------------------------
let fs = require("fs")
function readFile(...args){
    return new Promise((resolve,reject)=>{
        fs.readFile(...args,function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    });
}
// 如果返回的是一个promise，那么这个promise会执行，并且会采用它的状态
readFile("./name.txt","utf8").then(data=>{
    return data;
},err=>{
    return err;
    // console.log(err)  
}).then(data=>{  
    // console.log(data)
    return new Promise((resolve,reject)=>{
        reject("不OK")
    })
},err=>{}).then(data=>{
    console.log(data)
},err=>{
    console.log(err)  // 不OK
})
-----------------------------
-----------------------------
-----------------------------
*/
let fs = require("fs")
function readFile(...args){
    return new Promise((resolve,reject)=>{
        fs.readFile(...args,function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    });
}
// 如果返回的是一个promise，那么这个promise会执行，并且会采用它的状态
readFile("./name.txt","utf8").then(data=>{
    // return data;   return readFile(data,"utf8")
    return readFile(data,"utf8")
},err=>{
    return err;
}).then(data=>{
    console.log(data)  // 666
},err=>{
    console.log(err)
})
// 链式调用  如果在上一个then的第一个函数中，返回一个普通值，会走到下一个then的第1个函数，return的值作为这个then的data
// 如果返回的是一个promise，会作为下一个then的promise对象，data err去promise对象中取

// 手写一个promise
