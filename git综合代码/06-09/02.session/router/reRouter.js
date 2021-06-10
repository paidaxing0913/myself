const express = require('express');

const router = new express.Router();

const path = require('path');

const reRouterFn = (req,res,next) => {
    // 查看用户输入内容 拿到用户名和密码
    const {
       username,
       password
   } = req.query;

   const userReg = /^[0-9a-zA-Z_]{1,10}$/;
   const pass = /^[0-9]{1,10}$/;
   if(!userReg.test(username) || !userReg.test(password)){
        // 拼接err.ejs的路径
        const filePath = path.resolve(__dirname,'../6.views/err.ejs');
        return res.render(filePath,{
            errData:'账号和密码格式不对'
        })
   }
   next();
}

// 处理账号和密码的正则校验
router.use('/login',reRouterFn)
router.use('/register',reRouterFn)


module.exports = router;