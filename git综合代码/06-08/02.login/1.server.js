// 引入express
const express = require('express');

// 创建一个express的application的对象
const app = express();

// 引入path
const path = require('path');

// 引入mongoose
const mongoose = require('mongoose');

// 引入ejs
const ejs = require('ejs');

// 通知express使用ejs模板引擎
app.set('view engine','ejs');
app.set('views','views');

// 连接数据库
require('./2.db');
// 引入mongoose的当前用户集合
const userModel = require('./3.model/userModel');



// 登录接口
app.get('/login',async(req,res) => {
    // 拿到用户登录信息
    const {
        username,
        password
    } = req.query;

    // 查看用户的账号和密码是否为空
if(!username || !password) {
    // 拼接err.ejs的路径
    const filePath = path.resolve(__dirname,'./4.public/err.ejs');
    return res.render(filePath,{
        errData:'账号或密码不能为空'
    })
};

    // 查询数据库是否存在该用户
    const isHasUser = await userModel.findOne({
        username
    });

    // 如果没有就返回用户名不存在
    console.log(isHasUser);// 如果不存在则返回null
    if(!isHasUser) {
        // 拼接err.ejs的路径
        const filePath = path.resolve(__dirname,'./4.public/err.ejs');
        return res.render(filePath,{
            errData:'用户名不存在'
        })
    }
    // 如果存在 就判断密码是否正确
    if(isHasUser.password != password){
         // 拼接err.ejs的路径
        const filePath = path.resolve(__dirname,'./4.public/err.ejs');
        return res.render(filePath,{
            errData:'密码错误'
        })
    }
    // return res.send('登录成功');
    // 登录成功跳转到个人中心页
    const filePath = path.resolve(__dirname,'./4.public/center.html');
    res.sendFile(filePath);
})



// 注册接口
app.get('/register',async (req,res) => {
    // 查看用户输入内容 拿到用户名和密码
    console.log(req.query);
    const {
        username,
        password
    } = req.query;
    // 查看用户的账号和密码是否为空
if(!username || !password) {
    // 拼接err.ejs的路径
    const filePath = path.resolve(__dirname,'./4.public/err.ejs');
    return res.render(filePath,{
        errData:'账号或密码不能为空'
    })
}
    
    // 判断当前的用户名是否被注册
    const isHasUser = await userModel.findOne({
        username
    })

    if(isHasUser) {
        // 拼接err.ejs的路径
    const filePath = path.resolve(__dirname,'./4.public/err.ejs');
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
    res.redirect('./login.html')

    //.then(data => {
    //     console.log('写入数据成功');
    //     res.send('注册成功');
    // })
})


// 图片接口
app.get('/5.static/:src',(req,res) => {
    // console.log(req.params);
    const {
        src
    } = req.params;
    const filePath = path.resolve(__dirname,'./5.static',src);
    res.sendFile(filePath);
})


// 当访问根目录，设置默认访问路径是index.html
app.get('/',(req,res) => {
    res.redirect('/index.html');
})


// index.html的路径
app.get('/index.html',(req,res) => {
    // 获取index.html的路径
    const filePath = path.resolve(__dirname,'./4.public/index.html');
    res.sendFile(filePath);
})

// login.html的路径
app.get('/login.html',(req,res) => {
    // 获取index.html的路径
    const filePath = path.resolve(__dirname,'./4.public/login.html');
    res.sendFile(filePath);
})

// register.html的路径
app.get('/register.html',(req,res) => {
    // 获取index.html的路径
    const filePath = path.resolve(__dirname,'./4.public/register.html');
    res.sendFile(filePath);
})



// 监听端口号和服务器状态
let port = '3002';
app.listen(port,err => {
    if(err){
        console.log(err);
        return;
    }
    console.log('服务器启动，请访问'+ `http://127.0.0.1:${port}`);
})