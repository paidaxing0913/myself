// 引入的路径需要遵守commonjs规范

// 当引入的模块是默认暴露的时候
import add from './add';

// 当引入的模块是统一暴露或者分别暴露的时候，必须使用解构赋值的方法接收
import {
    sing,
    mins
} from './mins'

import {
    name,
    age,
    gender,
    say
} from './person';

console.log(name);
sing();
add(1,2);

// 浏览器不支持ES6模块化：
    // 使用Babel把某个文件夹内容的文件 编译成一个新的文件夹
    // 编译成了commonjs规范
    // 本地安装Babel：npm install --save-dev @babel/core @babel/cli @babel/preset-env
    // 配置package。json
    //      "babel": {
    // "presets": [
    //     "@babel/env"
    //   ]
    // }
    // npx(当命令没有安装到全局的时候启动本地命令)
    //    npx babel js -d build