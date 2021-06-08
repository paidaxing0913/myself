const fs = require('fs');
const path = require('path');
const readFilePath = path.resolve(__dirname,'01.mp4');
const writeFilePath = path.resolve(__dirname,'02.mp4');

const rs = fs.createReadStream(readFilePath);
const ws = fs.createWriteStream(writeFilePath,{
    flag:'a'
})

// pipe 会持续性消费可读流数据
// 将可读流数据写到可写流中
// 会自动关闭可写流
rs.pipe(ws);

// 监听可读流
rs.on('end',(err) =>{
    console.log('读取完成');
})



// *****************************************************
// const fs = require('fs');
// const path = require('path');
// const readFilePath = path.resolve(__dirname,'01.mp4');
// const writeFilePath = path.resolve(__dirname,'02.mp4');

// const rs = fs.createReadStream(readFilePath);
// const ws = fs.createWriteStream(writeFilePath,{
//     flag:'a'
// })

// rs.pipe(ws);
// // 监听可读流
// rs.on('end',(err) => {
//     console.log('读取完成');
// })
