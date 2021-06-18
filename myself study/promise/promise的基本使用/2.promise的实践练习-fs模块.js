const { promiseImpl } = require('ejs');
const fs = require('fs');

// 回调函数的形式
// fs.readFile('./resource/content.txt', (err,data)=> {
//     // 如果出错则抛出错误
//     if(err) throw err;
//     // 如果没错，就输出文件内容
//     console.log(data.toString());
// })


// promise的形式
const p = new promiseImpl((resolve,reject) => {
    fs.readFile('./resource/content.txt',(err,data)=>{
        // 如果出错
        if(err) reject(err);
        // 如果成功
        resolve(data);
    });
});

p.then(value=>{
    console.log(value.toString());
},reason=>{
    console.log(reason);
})