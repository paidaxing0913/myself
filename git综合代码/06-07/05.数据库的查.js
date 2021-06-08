// 1.引入mongoose模块
const mongoose = require('mongoose');

// 2.连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/atguigu',{
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
});

// 3.创建schema对象 方便未来对某个集合的值进行约束
const teacherSchema = new mongoose.Schema({
    name: {
        type:String,
        unique: true,// 唯一值
        required: true
    },
    age: Number,
    sex: String,
    hobby:[String],
    createTime:{
        type:Date,
        default:Date.now
    }
});

// 4.创建model对象
// 两个参数：集合的名字  集合的约数对象
const teacherModel =  mongoose.model('teacher',teacherSchema);

// 2.查
// 提供了find方法 返回一个promise对象
// teacherModel.find({
//     age: {
//         $lte: 18
//     }
// })
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// })

// findone只能筛选一个出来
teacherModel.findOne({
    age:{
        $lte: 18
    }
})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})