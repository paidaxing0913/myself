// 引入express
const express = require('express');
// 引入path
const path = require('path');

// 创建一个express的application的对象
const app = express();

// 引入ejs
const ejs = require('ejs');
app.set('view engine','ejs');
app.set('views','views');

app.get('/',(req,res) => {
    // 获取模板引擎路径
    const filePath = path.resolve(__dirname,'index.ejs');
    const data = '我的心愿是:世界和平';

    res.render(filePath,{
        data:data,
        name:'薛之谦',
        user: [{
            name:'chenergou',
            age:18,
            sex:'nv'
        },{
            name:'chendagou',
            age:16,
            sex:'nan'
        },{
            name:'chensangou',
            age:28,
            sex:'nv'
        }]
    })
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