const fs = require('fs');
// 得到路径
const path = require('path');

// 写入文件的绝对路径
const filePath = path.resolve(__dirname,'text.txt');
console.log(filePath);

// 同步打开文件
const fd = fs.openSync(filePath,'a');
// 读取文件的返回值是当前文件的id标识
console.log(fd);

// 同步写入
fs.writeSync(fd,'老徐，你要老婆不要');

// 关闭文件
fs.closeSync(fd);

// console.log('同步的文件操作没有执行完，是不会执行这条语句的');
