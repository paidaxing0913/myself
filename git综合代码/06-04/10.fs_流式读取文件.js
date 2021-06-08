const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname,'text.txt');

// 创建可读流
const rs = fs.createReadStream(filePath);
// rs打开了一个可读流 最大释放64kb 一直释放
rs.on("data",(chunk) => {
    // chunk是一直读取的数据
    console.log(chunk);
})

// 可读流读完之后触发end事件
rs.on('end',() => {
    console.log('数据读取完毕');
})