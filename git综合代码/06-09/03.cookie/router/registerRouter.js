const express = require("express");

const router = new express.Router();

const path = require("path")

//引入mongoose的当前用户信息集合
const userModel = require("../3.model/userModel");

// 注册接口
router.get('/register',async (req,res) => {
    // 查看用户输入内容 拿到用户名和密码
   
    const {
        username,
        password
    } = req.query;
    

    
    // 判断当前的用户名是否被注册
    const isHasUser = await userModel.findOne({
        username
    })

    if(isHasUser) {
        // 拼接err.ejs的路径
    const filePath = path.resolve(__dirname,'../6.views/err.ejs');
    return res.render(filePath,{
        errData:'用户名已经被注册'
        })
    };


    // 不为空就向数据库写入当前用户信息
    const registerData = await userModel.create({
        username,
        password
     });
     console.log(registerData);
    // res.send('注册成功');
    // 注册成功跳转登录页面
    res.redirect('/login.html')

})

module.exports = router;