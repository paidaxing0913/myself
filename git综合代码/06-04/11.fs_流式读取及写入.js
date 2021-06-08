const fs = require('fs');
const path = require('path');
const readFilePath = path.resolve(__dirname,'01.mp4');
const writeFilePath = path.resolve(__dirname,'02.mp4');

// 创建可读流和可写流
const rs = fs.createReadStream(readFilePath);
const ws = fs.createWriteStream(writeFilePath,{
    flag:'a'
})

// 书写data，监听可读流
rs.on('data',(chunk) => {
    // 把读取的chunk写入可写流
    ws.write(chunk);
})

// 书写一个end 可读流关闭
rs.on('end',() => {
    ws.close();
})

// 给可写流绑定close事件，关闭的时候触发
ws.on('close',() => {
    console.log('文件写入完毕');
})


