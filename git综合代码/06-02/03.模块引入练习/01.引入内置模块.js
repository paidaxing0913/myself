const os = require('os');
const free = os.freemem();//以整数的形式返回空闲的系统内存量（以字节为单位）
const total = os.totalmem();//以整数的形式返回系统的内存总量（以字节为单位）
const scale = free / total;
console.log('内存剩余容量是:' + (scale * 100).toFixed(2) + '%');