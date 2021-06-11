const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/',(req,res) => {
    const filePath = path.resolve(__dirname,'./index.html');
    const rs = fs.createReadStream(filePath);

    //获取请求中的Accept-Encoding可以接受的类型，根据可以接受的类型来完成压缩选择
    console.log(req.headers['accept-encoding']);
    const acceptEncoding = req.headers['accept-encoding'];
    // 可以使用includes判断字符串中是否含有某个值
    if(acceptEncoding.includes('gzip')){
        
    }
})