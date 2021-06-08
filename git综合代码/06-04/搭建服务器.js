const http = require('http');

const server = http.createServer((request,response) =>{
    console.log('客户端请求');

    response.setHeader('Content-Type','text/plain;charset=utf-8');

    response.end('你真丑');
})

server.listen('3000','192.168.17.103',() =>{
    console.log('服务器启动');
})