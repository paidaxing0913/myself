const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname,'text.txt');

(async () =>{
    const fd = await new Promise((resolve,reject) => {
        fs.open(filePath,'a',(err,fd) => {
            if(err){
                reject(err);
                return;
            }
            resolve(fd);
        })
    });

    await new Promise ((resolve,reject) => {
        fs.write(fd,'牵你的手',(err) => {
            if(err){
                reject(err);
                return;
            }
            resolve();
        })
    });

    await new Promise((resolve,reject) => {
        fs.close(fd,(err) => {
            if(err){
                reject(err);
                return;
            }
            resolve('完成');
        })
    });
})()
.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
