// 构造一个myPromise的类

// exector是默认的回调函数
function myPromise(exector) {
    // 保存指向实例化对象的this
    const _this = this;
    // 给实例化对象扩展两个属性 status value
    // 默认status是pending value是undefined
    _this.status = 'pending';
    _this.value = undefined;
    // 用对象接收onResolved()和onRejected();
    _this.callback = {};

    // 封装resolve和reject函数，promise的回调函数触发的时候传递进去
    function resolve(value) {
        if (_this.status !== 'pending') return;
        // 改变status和value
        _this.status = 'resolved';
        _this.value = value;

        // 为了保证then中的onResolved函数永远是异步的，给它包裹一层异步代码
        // 保证在执行onResolved的时候，then要已经执行了的
        setTimeout(() => {
            _this.callback.onResolved && _this.callback.onResolved(value);
        })

    }

    function reject(reason) {
        if (_this.status !== 'pending') return;
        // 改变status和value
        _this.status = 'rejected';
        _this.value = reason;

        // 为了保证then中的onRejected函数永远是异步的，给它包裹一层异步代码
        // 保证在执行onResolved的时候，then要已经执行了的
        setTimeout(() => {
            _this.callback.onRejected && _this.callback.onRejected(reason);
        })
    }
    // 当构造函数被实例化的时候，exector需要直接触发
    exector(resolve, reject);
}




// then在使用的时候是同步的，但是可以控制then中的函数是异步的
myPromise.prototype.then = function (onResolved, onRejected) {
    const _this = this;

    // then方法一定会返回一个promise对象
    return new myPromise((resolve, reject) => {
        // 封装连个函数onResolved和onRejected给实例化对象，让promise中的resolve和reject之后调用
        // 给_this扩展一个onResolved方法叫onResolved
        _this.callback.onResolved = function (value) {
            // 当callback的函数调用之后，让then中的onResolved执行,拿到返回值，因为then的返回值要看回调函数的返回值
            // 但是onresolved调用可能会报错，如果报错直接返回一个失败的promise对象，值是报错信息
            try {
                const re = onResolved(value);
                // 判断onResolved的返回值是不是promise对象
                if (re instanceof myPromise) {
                    // 如果re是promise对象，则re成功则调用resolve，re失败则调用reject
                    // 不能通过re.status判断re是成功还是失败，因为onResolved函数调用的时候内部可能有异步代码改变promise状态
                    // 使用then监听re是成功还是失败
                    re.then(function (data) {
                        resolve(data);
                    }, function (reason) {
                        reject(reason);
                    })
                } else {
                    resolve(re);
                }
            } catch (e) {
                // 当then中的方法出错直接调用reject返回失败的promise
                reject(e);
            }

        };
        // 给_this扩展一个onRejected方法叫onRejected
        _this.callback.onRejected = function (reason) {
            try {
                const re = onRejected(reason);
                if (re instanceof myPromise) {
                    re.then((value) => {
                        resolve(value);
                    }, (reason) => {
                        reject(reason);
                    })
                } else {
                    resolve(re);
                }
            } catch (e) {
                reject(e);
            }
        };

    });
}