const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    heading:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true}
},{
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })
const ContentModel = mongoose.model('content',contentSchema);
module.exports = ContentModel;