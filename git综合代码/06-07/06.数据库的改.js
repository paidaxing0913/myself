// 引入mongoose模块
const mongoose = require('mongoose');
// 连接数据库(open事件监听)
mongoose.connect('mongodb://127.0.0.1:27017/student',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
// 连接成功之后
mongoose.connection.once('open',err => {
    if(err){
        console.log(err);
        return;
    }
    console.log('数据库连接成功');
})
// 3.创建Schema对象
const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,// 唯一存在
        required:true// 必填项
    },
    age:Number,
    sex:String,
    hobby:[String],
    createTime:{
        type:Date,
        default:Date.now
    }  
});

// 4.创建model对象
// 两个参数：集合的名字  集合的约束对象
const teacherModel = mongoose.model('teacher',teacherSchema);


// 3.改
// updateMany进行更新数据
// updateOne更新数据
teacherModel.updateMany({

})
