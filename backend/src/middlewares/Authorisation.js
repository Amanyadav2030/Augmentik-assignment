const accessFile = require('../access.json');
const jwt = require('jsonwebtoken'); 
require('dotenv').config(); 
const mainKey = process.env.MAINKEY;
async function Authorization(req,res,next){
    const token = req.headers.authorization;
    const decode = jwt.decode(token);
    const role = accessFile.find((el)=>el.role==decode.role);
    if(role.access.data.includes('R') && role.access.data.includes('C') && role.access.data.includes('U') && role.access.data.includes('D')){
        next();    
    }else {
       return res.status(401).send("Not authorised");
    }    
};
module.exports= Authorization;