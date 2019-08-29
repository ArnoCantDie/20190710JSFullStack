// 工具函数    md5    123456---> 456789fsdafa6789fadsfasdf
let md5 = require('md5');

let tools = {
    md5(str){
        return md5(str)
    },
    cateToList(data){
        let firstArr = [];
        for(let i=0; i<data.length; i++){
            if(data[i].pid == "0"){
                firstArr.push(data[i])
            }
        }
        // console.log(firstArr)
        // firstArr[0].list = [{},{},{}]
        // firstArr[1].list = [{},{},{}]
        // firstArr[2].list = [{},{},{}]
        for(let i=0; i<firstArr.length; i++){
            firstArr[i].list = [];
            for(let j=0; j<data.length; j++){
                if(firstArr[i]._id == data[j].pid){
                    firstArr[i].list.push(data[j])
                }
            }
        }
        // console.log(firstArr)
        return firstArr;
    }
}

module.exports = tools