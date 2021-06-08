const http = require('http');

// 服务端地址
const url = 'http://127.0.0.1:3000';
// request方法请求服务端
const request = http.request(url,(response) => {
    console.log(response);
    // 得到响应状态码
    console.log(response.statuCode);
    // 响应的数据是一个可读流，通过data方法监听
    response.on('data',(chunk) => {
        console.log(chunk.toString());
    })
    response.on('end',(chunk) => {
        console.log('响应数据就收完毕');

    })
})
// 创建的客户端有一个end方法，可以开始发送请求
request.end();




// *******************************************
// const http = require('http');
// // 服务端的地址
// const url = 'http://127.0.0.1:3000'
// // request 方法请求服务端
// const request = http.request(url,(response) => {
//     console.log(response);
//     // 得到响应状态码
//     console.log(response.statusCode);
//     // 监听响应数据
//     response.on('data',(chunk) => {
//         console.log(chunk.toString());
//     })
//     response.on('end',(chunk) => {
//         console.log('响应数据接收完毕');
//     })
// })
// // 客户端有一个end方法可以发送请求
// request.end();



// // **********************************************
// const http = require('http');
// // 服务端地址
// const url = 'http://127.0.0.1:3000';
// // request方法请求服务端
// const request = http.request(url,(response) => {
//     console.log(response);
//     // 得到响应状态码
//     console.log(response.statusCode);
//     // 监听响应的数据
//     response.on('data',(chunk) => {
//         console.log(chunk.toString());

//     })
//     response.on('end',(chunk) => {
//         console.log('响应数据接收完毕');
//     })
// })
// // end方法，开始发送请求
// request.end();