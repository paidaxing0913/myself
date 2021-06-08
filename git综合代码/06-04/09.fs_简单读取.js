const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname,'text.txt');

// 简单读取文件
fs.readFile(filePath,(err,re) => {
    if(err){
        return;
    }
    console.log(re);
})