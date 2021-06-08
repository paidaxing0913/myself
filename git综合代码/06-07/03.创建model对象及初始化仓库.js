// 1.引入mongoose对象
const mongoose = require('mongoose');

// 2.连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/atguigu',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
// 数据库连接成功之后 会触发莫moose.connection的open事件
mongoose.connection.once('open',err => {
    if(err){
        console.log(err);
        return;
    }
    console.log('数据库连接成功');
})

// 3.创建schema对象 方便未来对某个值进行约束
const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,// 唯一存在
        required:true// 必填项
    },
    age: Number,
    sex: String,
    hobby: [String],
    createTime: {
        type:Date,
        default:Date.now
    }
});

// 4.创建modul对象(集合)
// 两个参数：集合的名字  集合的约束对象
const teacherModel = mongoose.model('teacher',teacherSchema);

// 5.初始化集合的内容(也可以不初始化，直接增)
new teacherModel({
    name:'老徐',
    age:18,
    sex:'女',
    hobby:['干饭','睡觉'],
    createTime: Date.now()
}).save((err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('teacher初始化成功');
})

