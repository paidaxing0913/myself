// // 接受类
// const EventEmitter = require('events');

// // 创建子类继承父类EventEmitter
// class myEmitter extends EventEmitter {};

// // 实例化子类
// const emitter = new myEmitter;

// // 绑定事件 对象有一个eventEmitter.on()函数，用于将一个或多个函数绑定到命名事件上
// // emitter.on('myclick',() => {
// //     console.log('你调用我了');
// // })

// // once只能触发一次
// emitter.once('myclick',() => {
//     console.log('你调用我了');
// })

// // eventEmitter.emit()用于触发事件
// setTimeout(() => {
//     emitter.emit('myclick');
//     emitter.emit('myclick');
// },2000)

//****************************** 
// const eventEmitter = require('events');
// // 创建子类继承父类
// class myEmitter extends eventEmitter {};
// //实例化子类
// const emitter = new myEmitter();
// // eventEmitter.on()绑定事件
// // eventEmitter.emit()触发事件

// emitter.on('myClick',() =>{
//     console.log('你调用我了');
// })
// setTimeout (() => {
//     emitter.emit('myClick');
// },2000)

//*********************************
const EventEmitter = require('events');
class myEmitter extends EventEmitter {};
const emitter = new myEmitter();
emitter.on('myClick',() => {
    console.log('呵呵呵');
})

setTimeout(() => {
    emitter.emit('myClik');
},1000)
