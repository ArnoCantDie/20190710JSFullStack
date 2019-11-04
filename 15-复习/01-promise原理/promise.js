const PENDING = "PENDING";
const RESOLVED = "RESOLVED";
const REJECTED = "REJECTED";
// Object.defineProperties(x,then,{
// })
// 比较promise2和x的关系
function resolvePromise(promise2, x, resolve, reject) {
    // console.log("promise2:",promise2)
    // console.log("x:",x)
    // 循环引用报错
    if (promise2 === x) {
        return reject(new TypeError('my Chaining cycle detected for promise #<Promise></Promise>'))
    }
    // 防止多次调用
    let called;
    if ((typeof x === "object" && x !== null) || typeof x === "function") {
        // x是一个对象（不包含null）或是一个函数
        try {
            // 有可能x上会被手动地加上一个then属性
            let then = x.then
            if (typeof then === "function") {
                // x有then，并且是一个then函数，说明x是promse
                // 现在x是一个promise  then方法
                // p.then(data=>{},err=>{})
                then.call(x, y => {
                    if (called) return;
                    called = true;
                    // data可以还是promise
                    // 采用promise的成功结果向下传递
                    // resolve(y)
                    //  递归
                    resolvePromise(promise2, y, resolve, reject)
                }, r => {
                    if (called) return;
                    called = true;
                    // 采用promise失败结果向下传递
                    reject(r)
                })
            } else {
                // x有then，但是then不是函数，{then:"hello"}
                // x不是promise
                resolve(x)
            }
        } catch (e) {
            if (called) return;
            reject(e)
        }
    } else {
        // x就是一个普通值
        resolve(x)
    }
}
class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        let resolve = (value) => {
            if (this.status === PENDING) {
                this.value = value;
                this.status = RESOLVED;
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }
        let reject = (reason) => {
            if (this.status === PENDING) {
                this.reason = reason;
                this.status = REJECTED;
                this.onRejectedCallbacks.forEach(fn => fn())
            }

        }
        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e)
        }
    }
    // then需要返回一个promise
    // onfulfilled可能返回一个promise或普通值
    // 如果是promise，就采用它的状态
    // 如果是普通值，这个值就作为下一个then成功的结果
    then(onfulfilled, onrejected) {
        // 防止then中没有函数
        onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : abc => abc;
        onrejected = typeof onrejected === "function" ? onrejected : err => { throw err };

        // 这里的Promise是我们自己写的Promise
        // promise2是返回的新的promise
        let promise2 = new Promise((resolve, reject) => {
            // 同步（执行器中没有异步代码）
            if (this.status === RESOLVED) {
                setTimeout(() => {
                    try {
                        // x可能是promise 也可能是普通值
                        let x = onfulfilled(this.value);
                        // 假如x是promise(有自己的状态)，需要让pormise2拥有x同样的状态
                        resolvePromise(promise2, x, resolve, reject); // 处理promise2和x的关系
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onrejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            // 异步（执行器中有异步代码）
            if (this.status === PENDING) {
                // 已经订阅好了
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onfulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onrejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                });
            }
        })


        return promise2;
    }
}

Promise.defer = Promise.deferred = function () {
    let dfd = {}
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
module.exports = Promise;