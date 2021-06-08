const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname,'text.txt');

// 简单读取文件
// fs.readFile(filePath,(err,re) => {
//     if(err){
//         return;
//     }
//     console.log(re); 
// })

//promise解决回调地狱
// const p1 = new Promise ((resolve,reject) => {
//     fs.readFile(filePath,(err,re) => {
//         if(err){
//             reject(err);
//             return;
//         }
//         // console.log(re);
//         resolve(re);
//     })
// })
// p1.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// 使用promisify
const {
    promisify
} = require('util');

const readFile = promisify(fs.readFile);
console.log(readFile);
readFile(filePath).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})