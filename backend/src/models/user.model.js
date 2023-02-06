const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name:{type:String},
    last_name:{type:String},
    email:{type:String,required:true,unique:true},
    contact:{type:String,required:true},
    password:{type:String,required:true},
    role:{
        type:String,
        enum:['admin',"user"],  
        default:'user'
    }
},{
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })
const UserModel = mongoose.model('user',userSchema);
module.exports = UserModel;