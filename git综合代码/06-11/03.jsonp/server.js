const express = require('express');
const app = express();



// get请求 *************************************************
app.get('/login',(req,res) => {
    const {
        user,
        pass,
        cb
    } = req.query;
    console.log(req.query);
    
    if(user === 'laoxu' && pass === '123'){
        const data = {
            mes:'ok',
            code:1
        }
        res.set('Content-Type,application/javascript,charest=utf-8');

        return res.send(`${cb}(${JSON.stringify(data)})`)
    }

    const err = {
        mes:'信息错误',
        code:0
    }
    return res.send(err);
})



app.listen('3000',(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('http://127.0.0.1:3000');
})