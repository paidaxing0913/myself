const express = require('express');

const router = new express.Router();

const path = require('path');

const isEmptyRouterFn = (req,res,next) => {
    // 查看用户输入内容 拿到用户名和密码
    
    const {
        username,
        password
    } = req.query;
    
// 查看用户的账号和密码是否为空
if(!username || !password) {
    // 拼接err.ejs的路径
    const filePath = path.resolve(__dirname,'../6.views/err.ejs');
    return res.render(filePath,{
        errData:'账号或密码不能为空'
    })
}

// 处理完成还要继续走的话需要调用next方法
next();
}



// 处理账号和密码是否为空的中间件
router.use('/login',isEmptyRouterFn)



// 处理账号和密码是否为空的中间件
router.use('/register',isEmptyRouterFn)



module.exports = router;