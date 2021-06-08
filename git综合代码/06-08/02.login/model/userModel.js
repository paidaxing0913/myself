const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

// 创建model
const userModel = mongoose.model('uesrInfo',userSchema);

module.exports = userModel;