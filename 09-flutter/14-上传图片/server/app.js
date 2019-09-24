const express = require("express");
var multiparty = require('multiparty');

const app = express();
app.get("/",(req,res)=>{
    console.log("...........*************")
    res.send("OK")
})

app.post('/imgupload',function(req,res){

    console.log('imgupload');
    var form = new multiparty.Form();
    form.uploadDir='public/upload'  /*设置图片上传的路径*/
    form.parse(req, function(err, fields, files) {
		console.log(files); //文件
		console.log(fields); //post数据
        var path="/"+files.file[0].path;
        res.json({"success":"true","path":path})  /*给编辑器返回地址信息*/
    });
})
app.listen(3000);