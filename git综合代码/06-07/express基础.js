const express = require('express');

// 创建对象
const app = express();

// 书写接口
app.get('/',(req,res) => {
    console.log('被请求了');
    console.log(req.methed);//请求方式
    console.log(req.params);// post请求的数据
    console.log(req.query);// get请求的查询字符串组成的信息
    console.lgog(req.url);// 请求的路径信息

    // 响应
    // res.end('今天好热');
    // 自动设置响应头的content-type
    // res.send('今天好热');

    // 把数据转化为json响应
    // res.json({
    //     'name':'laowang'
    // })
})

// 给当前服务监听端口号
app.listen(3001,(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('服务请求成功,请访问:' +`http://127.0.0.1:3001`);
})