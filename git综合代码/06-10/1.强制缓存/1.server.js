const express = require('express');

const {exec} = require('child_process');

const path = require('path');

const app = express();

app.get('/',(req,res) => {
    const filePath = path.resolve(__dirname,'./2.index.html');
    const rs = fs.createReadStream(filePath);
    rs.pipe(res);
})


app.listen('3000',(err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('服务已经启动 http://127.0.0.1:3000');
})