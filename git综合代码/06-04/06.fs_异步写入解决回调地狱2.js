const fs = require('fs');
const path = require('path');
// 得到文件路径
const filePath = path.resolve(__dirname,'text.txt');

// 打开
function open(){
    return new Promise((resolve,reject) => {
        fs.open(filePath,'a',(err,fd) => {
            if(err){
                reject(err);
                return;
            }
            resolve(fd);
        })
    })
}

// 写入
function write(fd){
    return new Promise((resolve,reject) => {
        fs.write(fd,'跟着你后边走',(err) => {
            if(err){
                reject(err);
                return;
            }
            resolve();
        })
    })
}

// 关闭
function close(){
    return new Promise((resolve,reject) => {
        fs.close(fd,(err) => {
            if(err){
                reject(err);
                return;
            }
            resolve();
        })
    })
}

(async () => {
    const fd = await open();
    await write(fd);
    const re = await close(fd);
    return re;
})()
.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
