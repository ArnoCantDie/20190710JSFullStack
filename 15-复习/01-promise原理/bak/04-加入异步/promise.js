const PENDING = "PENDING";
const RESOLVED = "RESOLVED";
const REJECTED = "REJECTED";
class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined; // 终值
        this.reason = undefined; // 据因
        this.onResolvedCallbacks = []; // 存成功的回调函数
        this.onRejectedCallbacks = []; // 存失败的回调函数
        let resolve = (value) => {  // 成功的函数
            if (this.status == PENDING) {
                this.value = value;
                this.status = RESOLVED;
                this.onResolvedCallbacks.forEach(fn=>fn())
            }
        }
        let reject = (reason) => {  // 失败的函数
            if (this.status === PENDING) {
                this.reason = reason;
                this.status = REJECTED;
                this.onRejectedCallbacks.forEach(fn=>fn())
            }
        }
        try{
            executor(resolve, reject);
        }catch(e){
            reject(e)
        }
    }
    then(onfulfilled,onrejected) {
        if(this.status === RESOLVED){
            onfulfilled(this.value);
        }
        if(this.status === REJECTED){
            onrejected(this.reason);
        }
        if(this.status === PENDING){
            // 订阅
            this.onResolvedCallbacks.push(()=>{
                onfulfilled(this.value)
            })
            // 订阅
            this.onRejectedCallbacks.push(()=>{
                onrejected(this.reason)
            })
        }
    }
}
module.exports = Promise;