const express = require('express');
const router = new express.Router();
const path = require("path");

// 引入Mongoose的当前用户信息集合
const useModel = require('../3.model/userModel');

const cookieParser = require('cookie-parser');
// 获取cookie并且把cookie以对象的方式呈现
router.use(cookieParser());


// 权限控制
router.use('/center.html',async (req,res,next) => {
    // 当用户访问center.html的时候，进行判断是否携带服务端发生的cookie
    console.log(req.cookies);

    if (req.cookies.userID) {
        try{
            // 如果cookies的userID存在，则去数据库判断是否有该用户
            const re = await userModel.findOne({
                _id: req.cookies.userID
            })

            if(re){
                next();
            } else {
                // 拼接err.ejs的路径
                const filePath = path.resolve(__dirname,'../6.views/err.ejs');
                return res.render(filePath, {
                    errData: '权限不足，请重新登录再访问个人中心页'
                })
            }
            
        } catch(e){
            // 拼接err.ejs的路径
            const filePath = path.resolve(__dirname,'../6.views/err.ejs');
            return res.render(filePath, {
                errData: '权限不足，请重新登录再访问个人中心页'
            })
        }
    } else {
        // 拼接err.ejs的路径
        const filePath = path.resolve(__dirname,'../6.views/err.ejs');
        return res.render(filePath, {
            errData: '权限不足，请重新登录再访问个人中心页'
        })
    }

})



router.get('center.html',(req,res) => {
    // 响应页面
    const filePath = path.resolve(__dirname,'../6.views/center.html')
    res.sendFile(filePath);
})

module.exports = router;