const mongoose = require('mongoose');
const statisticSchema = mongoose.Schema({
    value:{ type: Number,required:true },
    title:{ type:String,required:true }
},{
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
}) 
const statisticModel = mongoose.model('statistic',statisticSchema);
module.exports = statisticModel;