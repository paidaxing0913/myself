// 构造一个myPromise的类


// exector是默认的回调函数

function myPromise(exector){
    // 保存指向实例化对象的this
    const _this = this;
    // 给实例化对象扩展两个属性 status value
    // 默认status是pending value是undefined
    _this.status = 'pending';
    _this.value = undefined;
    // 用对象接收onResolved()和onRejected();
    _this.callback = {};

    // 封装resolve和reject函数，promise的回调函数触发的时候传递进去
    function resolve(value){
        if(_this.status !== 'pending') return;
        // 改变status和value
        _this.status = 'resolved';
        _this.value = value;

        // 为了保证then中的onResolved函数永远是异步的，给它包裹一层异步代码
        // 保证在执行onResolved的时候，then要已经执行了的
        setTimeout(() => {
            _this.callback.onResolved(value);
        })
       
    }

    function reject(reason){
        if(_this.status !== 'pending') return;
        // 改变status和value
        _this.status = 'rejected';
        _this.value = reason;
        
        // 为了保证then中的onRejected函数永远是异步的，给它包裹一层异步代码
        // 保证在执行onResolved的时候，then要已经执行了的
        setTimeout(() => {
            _this.callback.onRejected(reason);
        })
    }

    
    // 当构造函数被实例化的时候，exector需要直接触发
    exector(resolve,reject);

    
}
// then在使用的时候是同步的，但是可以控制then中的函数是异步的
myPromise.prototype.then = function(onResolved,onRejected) {
    const _this = this;
    // onResolved 和 onRejected两个方法需要在resolve和reject函数调用的时候才能执行
    // 但是这两个函数只能在then中才能接收，所以需要把两个函数交给构造函数中的resolve和reject两个函数使用
    
    // 给_this扩展一个onResolved方法叫onResolved
    _this.callback.onResolved = onResolved;
    // 给_this扩展一个onRejected方法叫onRejected
    _this.callback.onRejected = onRejected;
}