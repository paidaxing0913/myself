
const http = require('http');

// 使用HTTP模块创建一个服务 参数是一个回调函数 监听客户端请求
const server = http.createServer((request,response) => {
    console.log('客户端请求');
    // 在响应头上设置一个content-type属性规定响应的类型和字符编码
    response.setHeader('Content-Type','text/plain;chest=utf-8');
    // 返回响应
    response.end('呵呵呵');
})

server.listen('3000','127.0.0.1',() => {
    console.log('服务器启动');
})

let port = '3000';
let host = '127.0.0.1';
// 给当前创建的服务添加主机和地址，第三个参数是回调函数，启动服务的时候调用
server.listen(port,host,() => {
    console.log('服务器启动，请访问:' +`http:${host}:${port}`);
})


// ******************************************************************
// const http = require('http');
// // 搭建服务，监听客户端请求 参数是一个回调函数
// const server = http.createServer((request,response) => {
//     // request请求对象 response响应对象
//     console.log('客户端请求');
//     response.setHeader('Content-Type','text/plain;charset=utf-8');
//     // 返回响应
//     response.end('hhgs');

// })
// let port = '3000';
// let host = '127.0.0.1';
// // 给当前创建的服务器添加主机和地址，第三个参数是回调函数，服务器启动的时候调用
// server.listen(port,host,() => {
//     console.log('服务器启动，请访问:' + `http:${host}:${port}`);
// })


// *****************************************************************
// const http = require('http');
// // 搭建服务器，监听客户端请求
// const server = http.createServer((request,response) => {
//     console.log('客户端请求');
//     //  在响应头上设置Content-Type,规定响应类型和字符编码
//     response.setHeader('Content-Type','text/plain;charest=utf-8');
//     response.end('jd');
// })
// let port = '3000';
// let host = '127.0.0.1';
// server.listen((port,host) => {
//     console.log('服务器启动，请访问:' + `http:${host}:${port}`);
// })