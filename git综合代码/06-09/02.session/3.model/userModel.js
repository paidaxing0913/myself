const mongoose = require('mongoose');
// 创建schema
const userSchema = new mongoose.Schema ({
    username: {
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
// 创建model对象
const userModel = mongoose.model('userInfo',userSchema);

// 暴露userModel
module.exports = userModel;