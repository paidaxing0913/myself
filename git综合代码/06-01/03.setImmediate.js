/*
    setInmmediate()方法
        立即执行函数
        当浏览器执行完同步代码会立即执行这个函数
*/
console.log(1);

setImmediate(() => {
    console.log(2);
})
console.log(3);

process.nextTick(() => {
    console.log(4);
})

/*
process.nextTick()
    优先于所有的异步代码执行

*/