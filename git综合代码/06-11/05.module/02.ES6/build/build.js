(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function add(a, b) {
  console.log(a + b);
} // 默认暴露
// 当一个模块只需要暴露一个对象的时候使用


var _default = add;
exports["default"] = _default;
},{}],2:[function(require,module,exports){
"use strict";

var _add = _interopRequireDefault(require("./add"));

var _mins = require("./mins");

var _person = require("./person");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 引入的路径需要遵守commonjs规范
// 当引入的模块是默认暴露的时候
// 当引入的模块是统一暴露或者分别暴露的时候，必须使用解构赋值的方法接收
console.log(_person.name);
(0, _mins.sing)();
(0, _add["default"])(1, 2); // 浏览器不支持ES6模块化：
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
},{"./add":1,"./mins":3,"./person":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sing = sing;
exports.mins = mins;
var name = '薛之谦';

function mins(a, b) {
  console.log(a - b);
}

function sing() {
  console.log('sing');
} // 统一暴露
// 当模块部分暴露的时候使用
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.say = say;
exports.gender = exports.age = exports.name = void 0;
// 分别暴露必须暴露完整的定义
// 一般在所有的东西都需要暴露的时候使用
var name = 'laoxu';
exports.name = name;
var age = 18;
exports.age = age;
var gender = 'man';
exports.gender = gender;

function say() {
  console.log('hello');
}
},{}]},{},[2]);
