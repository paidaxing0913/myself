// 声明构造函数
function Promise(executor) {
    // 添加属性
    this.PromiseState = "pending";
    this.PromiseResult = "null";
    // 保存实例对象的this的值
    const _this = this;

    // resolve函数
    function resolve(data) {
        // promise的状态只能修改一次 判断是不是pending状态，是就改变，不是就不能改，直接return
        if(_this.PromiseState !== 'pending') return;
        // 修改对象的状态(promiseState)
        _this.PromiseState = "fulfilled";
        // 设置对象的结果值(promiseResult)
        _this.PromiseResult = data;

    };

    // reject函数
    function reject(data) {
        // promise的状态只能修改一次 判断是不是pending状态，是就改变，不是就不能改，直接return
        if(_this.PromiseState !== 'pending') return;
        // 修改对象的状态(promiseState)
        _this.PromiseState = "rejected";
        // 设置对象的结果值(promiseResult)
        _this.PromiseResult = data;


    };

    try {
        // 同步调用执行器函数
        executor(resolve, reject);
    } catch (e) {
        // 修改promise对象状态为失败 调用reject
        reject(e);
    }



};



// 添加then方法
Promise.prototype.then = function (onResolved, onRejected) {
    // 调用回调函数
    // 成功调用onResolved 对成功的条件进行判断 this指向实例化对象p
    if(this.PromiseState === 'fulfilled'){
        onResolved(this.PromiseResult);
    }
   
    // 失败调用onRejected
    if(this.PromiseState === 'rejected'){
        onRejected(this.PromiseResult);
    }
    
}