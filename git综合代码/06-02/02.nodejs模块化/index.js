// 引入模块 使用require方法
// require();

// require('./add.js')
// require('fs')
// require('jquery');

/*
    模块标识：
    引入模块类型
        1.自定义模块
            需要添加路径信息（当前文件夹需要添加./）
            可以省略文件后缀名
        2.node内部模块
            直接书写模块名
        3.第三方模块
            需要npm下载，然后再直接书写当前模块名称
        require('./add.js')
        require('fs')
        require('jquery');

*/

// 开始引入模块
// 1.当暴露的方法在对象中时，接收的是一个对象
// const o = require('./add.js');
// console.log(o);
// 2.当暴露的方法在对象中，可以使用解构赋值，拿出这个方法
const {
    add
} = require('./add');
console.log(add(1,2,3,4));

const {
    sub
} = require('./sub');
console.log(sub(4,1));