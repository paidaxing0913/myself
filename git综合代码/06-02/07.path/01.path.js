const path = require('path');

// 根据当前路径 得到其他路径
const filepath = path.resolve('../06.process.index.txt');
console.log(filepath);

const filepath2 = path.resolve('../06.process','01.txt');
console.log(filepath2);

const filepath3 = path.resolve('../06.process/util','01.js');
console.log(filepath3);

// 需求：在path.js(当前文件)，获取process.js文件的绝对路径
const processPath = path.resolve('../06.process','01.process.js');
console.log(processPath);

// 需求：在path.js(当前)文件，获取其他文件的路径
const bufferPath = path.resolve('../05.Buffer','01.Buffer.js');
console.log(bufferPath);