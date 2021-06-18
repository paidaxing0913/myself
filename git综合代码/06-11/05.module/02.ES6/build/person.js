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