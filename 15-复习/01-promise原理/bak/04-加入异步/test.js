// 状态不可逆，一旦成功了，就不能失败了

let Promise = require("./promise")
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("包")
    },3000)
})
promise.then(function (data) {
    console.log(data)
}, function (err) {
    console.log(err)
});

