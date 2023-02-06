const express = require('express');
const Authmiddleware = require('../middlewares/Authmiddleware');
const Authorization = require('../middlewares/Authorisation');
const ContentRouter = express.Router();
const {ContentModel} = require('../models');
ContentRouter.get('/',async(req,res)=>{
    try {
        let content = await ContentModel.find();
        res.send(content);
    } catch (error) {
        res.status(501).send(error.message)
    }
})

ContentRouter.post('/',Authmiddleware,Authorization,async(req,res)=>{
    try {
        let Existingcontent = await ContentModel.find();
        if(Existingcontent.length){
            const id = Existingcontent[0]._id;
            const updatedContent = await ContentModel.findByIdAndUpdate(id,req.body);
            res.send({msg:'Updated successfully'})
        }else{
            const content  = new ContentModel(req.body);
            await content.save();
            res.send(content);
        }
    } catch (error) {
        res.status(501).send(error.message);
    }
})
module.exports = ContentRouter;