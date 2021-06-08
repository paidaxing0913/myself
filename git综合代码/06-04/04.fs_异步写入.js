const fs = require('fs');
const path = require('path');

// 得到文件路径
const filePath = path.resolve(__dirname,'text.txt');
// 异步打开文件
// fs.open(filePath,'a',(err,fd) => {
//     // 错误有限处理，所以第一个参数一般都是err
//     if(err){
//         return;
//     }
//     // fd是打开文件的标识，是第二个参数
//     // 异步写入文件
//     fs.write(fd,'要，来一打',(err) => {
//         if(err){
//             return;
//         }

//         // 异步关闭文件
//         fs.close(fd,(err) => {
//             if(err){
//                 return;
//             }
//             console.log('文件关闭成功');
//         })
//     })
// })

// console.log('hello,world');

//
// 打开
fs.open(filePath,'a', (err,fd) => {
    if(err){
        return;
    }
    // 写入
    fs.write(fd,'yao',(err) => {
        if(err){
            return;
        }

        //关闭
        fs.close(fd,(err) => {
            if(err){
                return;
            }
            console.log('关闭成功');
        })
    })

})