function add(...rest){
    return rest.reduce((p,i) => {
        return p + i;
    })
}

/*
    默认情况下模块内部代码对于外部是不可见的，可以通过两种方式向外部暴露变量和函数
    两种方法暴露
        module.exports
            默认是一个对象{}，是真正暴露的对象，也就是module.exports指向的是谁就暴露谁
        exports


*/

// 1.暴露出去的是一个对象，对象里有一个add方法
// 将来引入这个模块的时候接受的是一个对象，对象中有add方法
// 可以暴露多个方法或属性
// module.exports.add = add;
// 一次暴露多个
// module.exports = {
//     add1,
//     add2,
// }

// 2.把默认module.exports指向的对象，直接更换了add方法，所以直接暴露的是add方法
// 将来引入这个模块的时候，接受的是add方法
// 只能暴露一个方法
module.exports.add = add;

// 3.相当于给modul.exports默认的对象添加了一个方法，也可以暴露出去
// exports.add = add;

// 4.不能成功暴露，因为修改了exports地址，不再指向module.exports,所以没有给module.exports添加方法
// exports = add;


