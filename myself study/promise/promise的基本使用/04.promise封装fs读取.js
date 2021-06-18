// 封装一个函数 mineReadFile
// 参数path
// 返回：promise对象
function mineReadFile(path){
    return new Promise((resolve,reject) => {
        // 引进fs 读取文件
        require('fs').readFile(path,(err,data)=> {
            // 判断 失败
            if(err) reject(err);
            // 成功
            resolve(data);
        });
    })
}

mineReadFile('./resource/content.txt')
.then(value=>{
    console.log(value.toString());
},reason=>{
    console.log(reason);
});