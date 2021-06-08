// 1.引入mongoose
const mongoose = require('mongoose');

// 2.连接数据库(open事件监听方式)
mongoose.connect('mongodb://127.0.0.1:27017/atguigu',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
// 连接成功之后
mongoose.connection.once('open',err => {
    if(err){
        console.log(err);
        return;
    }
    console.log('数据库连接成功');
})

// 3.创建achema对象，方便未来对某个集合的值进行约束
const teacherSchema = new mongoose.Schema({
    name: {
        type:String,
        unique:true,//唯一存在(以后不能有name的重名)
        required:true//必填项
    },
    age: Number,
    sex: String,
    // hobby:Array,//限制值必须是一个数组
    hobby:[String],// 限制值必须是一个数组，并且数组的值必须是字符串
    createTime: {
        type:Date,
        default: Date.now
    }
});

// 创建model对象(集合)
// 两个参数：集合的名字 集合的约束对象
const teacherModel = mongoose.model('teacher',teacherSchema);

// 3.改
// updateMany方法可以进行更新数据
// updateOne方法可以进行更新数据

teacherModel.updateMany({
    age:20
},{
    $set:{
        age:6
    }
})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})