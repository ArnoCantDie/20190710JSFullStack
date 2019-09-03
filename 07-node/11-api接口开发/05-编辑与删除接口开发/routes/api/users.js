// 用户管理api接口
const express = require("express")
const bcrypt = require("bcrypt") // 加密密码的
const jwt = require("jsonwebtoken") // 生成token 
const keys = require("../../config/keys")
const passport = require("passport")

const router = express.Router()

const User = require("../../models/User") // 得到User model  操作user集合

//   /api/users/test
router.get("/test",(req,res)=>{
    res.json({msg:"login ok"})
})

// 注册接口
router.post("/register",(req,res)=>{
    // 得到用户提交的数据
    User.findOne({email:req.body.email}).then(user=>{
        if(user){
            res.status(400).json("邮箱已被注册")
        }else{
            const newUser = new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
            })
            bcrypt.genSalt(10,function(err,salt){
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err) return;
                    newUser.password = hash;
                    newUser.save().then(user=>res.json(user)).catch(err=>console.log(err))
                })
            })
        }
    })
})

// 登录接口   用户名+密码    邮箱+密码   电话+验证码   电话+密码
// 豆瓣接口   xxxx {code:0,msg:{}}
router.post("/login",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email}).then(user=>{
        if(!user){
            return res.status(404).json("用户不存在")
        }
        bcrypt.compare(password,user.password).then(isMatch=>{
            if(isMatch){
                // res.json({msg:"success"})
                const rule = {
                    id:user.id,
                    name:user.name,
                    email:user.email
                }
                jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token)=>{
                    if(err) console.log(err)
                    res.json({
                        success:true,
                        token:'Bearer ' + token
                    })
                })
            }else{
                return res.status(404).json("密码错误")
            }
        })
    })
})

// jwt  token   token里面保存了用户的信息 
// token最终是服务器发送给客户端 保存在客户端  localStorage
// jsonwebtoken   生成token    验证token(token是否合法，token是否过期)
// token就是一个令牌  钥匙
// 如果登录成功了，你需要带着这个令牌去访问别的接口
// 有的接口是需要有令牌才能访问，没有令牌是不能访问


// 获取用户信息 
// 当访问/current 时，需要带着token来访问
// 当访问/current时，要返回用户信息，当客户端带着token来访问了，验证一个token是否合法，如果合法，我们可以从这个token中得到用户信息，把这个用户信息给返回
// passport 来验证token是否合法
// 由于之前我们配置ok了，后面哪个接口需要验证token，那么就在这个接口后面加 passport.authenticate("jwt",{session:false})
// 如果没有带上token去访问/current  人家返回的是Unauthorized
// 现在我们要带上token去访问   当登录成功后，得到token
// token需要通过请求头带过去
// 当带着token去访问/current时，首先验证，如果验证通过， jwt_payload保存了用户信息
router.get("/current", passport.authenticate("jwt",{session:false}), (req,res)=>{
    res.json({
        id:req.user.id,
        name:req.user.name,
        email:req.user.email
    })
})

module.exports = router

// { id: '5d6db69bd4f8d636e0c7db3d',
//   name: 'wangcai',
//   email: '123456@qq.com',
//   iat: 1567474827,
//   exp: 1567478427 }