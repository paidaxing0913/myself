const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const zlib = require('zlib');

app.get('/',(req,res) => {
    const filePath = path.resolve(__dirname,'./index.html');
    res.sendFile(filePath);
})


app.get('/login',(req,res) => {
    const {
        user,
        pass
    } = req.query;
    console.log(user,pass);

    if(user === 'laoxu' && pass === '123'){
        const data = {
            mes:'ok',
            code:1
        }
        return res.json(data);
    }

    const err = {
        mes:'信息错误',
        code:0
    }
    return res.json(err);
})


app.listen('3000',(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('http://127.0.0.1:3000');
})


