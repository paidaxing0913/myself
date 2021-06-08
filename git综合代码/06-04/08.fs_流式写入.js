const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname,'text.txt');

// 流式写入 创建可写流
const fd = fs.createWriteStream(filePath,{
    flag: 'a'
})

// 可写流有一个open和close事件，当文件打开可写流和关闭的时候触发
fd.on('open',() => {
    console.log('可写流打开，开始写入');
})

fd.on('close',() => {
    console.log('可写流关闭，停止写入');
})
fd.write('hhh突然出现');

// 写入完成自行关闭
fd.close();
