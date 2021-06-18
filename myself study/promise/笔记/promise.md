promise优点：
  1.支持链式调用，可以解决回调地狱问题
    --回调地狱：回调函数嵌套调用，外部回调函数执行的结果是嵌套得到回调执行的条件
    --回调地狱缺点：不便于阅读  不便于异步处理
    --解决方案：promise链式调用
  2.指定回调函数的方式更加灵活

promise的三种状态 
实例对象中的一个属性 （PromiseState）
    --pending 未决定的
    --resolved/fullfiled 成功
    --rejected 失败
promise的两种状态改变， 只能改变一次
    --pending变为resolved
    --pending变为rejected
     --成功的结果数据为value  失败的结果数据为reason

promise对象的值
实例对象中的另一个属性 （PromiseResult）仅存着异步任务 失败/成功的结果
  --resolve
  --reject
promise.resolve方法：(value)=>{} value:成功的数据或者promise对象

promise.reject方法：(reason)=>{} reason:失败的原因 返回一个失败的promise对象

promise.all方法：(promise)=>{} 包含n个promise的数组 返回一个新的promise，只有所有的promise都成功才成功，有一个失败就直接失败

我是程序员，具体什么员，是我想成为你家庭的一员。
偶尔也会脱发，脱的什么发，是想你想的没有办法。
看的什么文档，是我对你的爱不可挡。
接着开始建数据库，建的什么库，是你不理我就是对我最大的残酷
新建一个类，建的什么类，是我惹你生气后流下的悔恨的泪
然后思考设计模式，设计什么式，是我想拥有你的跃跃欲试。
之后就是写代码，写的什么码，是每晚想你想的心乱如麻。
