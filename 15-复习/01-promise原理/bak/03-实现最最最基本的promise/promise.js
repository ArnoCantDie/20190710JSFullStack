const PENDING = "PENDING";
const RESOLVED = "RESOLVED";
const REJECTED = "REJECTED";
class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined; // 终值
        this.reason = undefined; // 据因
        let resolve = (value) => {  // 成功的函数
            if (this.status == PENDING) {
                this.value = value;
                this.status = RESOLVED;
            }
        }
        let reject = (reason) => {  // 失败的函数
            if (this.status === PENDING) {
                this.reason = reason;
                this.status = REJECTED;
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
    }
}
module.exports = Promise;