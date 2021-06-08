// const crypto = require('crypto');
// // 得到一个明文 必须是字符串
// let str = '123456';
//为了安全起见，有两种防止被撞库的方法 1.加密再加密多加密几层  2.给明文加一点盐
// let salt = 'xsacsae';
// str += salt;
// // 先确定使用哪种加密算法 MD5 sha1 sha256 sha512
// let md5 = crypto.createHash('MD5');
// // 使用update方法得到对应的hash对象，参数是明文和明文的字符编码
// const secretHash = md5.update(str,'utf-8');
// // 通过hash对象的digest('hex')方法可以得到对应的密文
// const secret = secretHash.digest('hex');
// console.log(secret);

//*********************************************
const crypto = require('crypto');
// 得到一份明文
let str = '1334354';
let salt = 'seifurbg';
str += salt;
// 确定算法
let md5 = crypto.createHash('sha512');
// update得到对应的hash对象
const secretHash = md5.update(str,'utf-8');
// 通过hash对象得到对应的密文
const secret = secretHash.digest('hex');
console.log(secret);

