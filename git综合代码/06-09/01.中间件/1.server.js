// 引入express
const express = require('express');

// 创建一个express的application的对象
const app = express();


// 引入ejs
const ejs = require('ejs');

// 通知express使用ejs模板引擎
app.set('view engine','ejs');
app.set('views','views');

// 连接数据库
require('./2.db');

// 引入路由管理模块
const isEmptyRouter = require('./router/isEmptyRouter');
const reRouter = require('./router/reRouter');
const registerRouter = require('./router/registerRouter');
const loginRouter = require('./router/loginRouter');
const centerRouter = require('./router/centerRouter');



// 官方的静态资源中间件
app.use(express.static('./4.public'));
app.use(express.static('./5.static'));


// 处理req请求携带的数据的中间件，把req的数据放在了req.body的属性上了
app.use(express.urlencoded({
    extend:true
}))


// 把引入的路由挂载在app上
app.use(isEmptyRouter);
app.use(reRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(centerRouter);



// 监听端口号和服务器状态
let port = '3002';
app.listen(port,err => {
    if(err){
        console.log(err);
        return;
    }
    console.log('服务器启动，请访问'+ `http://127.0.0.1:${port}`);
})

