const express = require('express');
const Authmiddleware = require('../middlewares/Authmiddleware');
const Authorization = require('../middlewares/Authorisation');
const StatisticsRouter = express.Router();
const {statisticModel} = require('../models');
StatisticsRouter.get('/',async(req,res)=>{
    try {
        const statistics = await statisticModel.find();
        res.send(statistics);
    } catch (error) {
        res.status(501).send(error.message)
    }
})
StatisticsRouter.patch('/:id',Authmiddleware,Authorization,async(req,res)=>{
    const {id} = req.params;
    try {
        const updatedStatistic = await statisticModel.findByIdAndUpdate(id,req.body);
        res.send({msg:'Updated successfully'})
    } catch (error) {
        res.status(501).send(error.message)
    }
})
StatisticsRouter.post('/',Authmiddleware,Authorization,async(req,res)=>{
    try {
        const statisticModel  = new statisticModel(req.body);
        await statistic.save();
        res.send(statistic);
    } catch (error) {
        res.status(501).send(error.message)
    }
})
module.exports = StatisticsRouter;