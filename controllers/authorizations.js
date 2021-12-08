const {response} = require('express');
const { generarToken } = require('../helpers/generar-token');
const Application = require('../models/application');
const Authorization = require('../models/authorization');

const auth = async (req, res = response) => {
    try{
        const appId = req.body.application_id;
    
        //La aplicación existe
        const application = await Application.findById(appId);
    
        if(!application){
            res.status(400).json({
                msg:"La aplicación no existe"
            });
            return;
        }
            
        const token = await generarToken(application.id);
    
        const application_id = application.id;
    
        const authorizationApp =  await Authorization.findOne({application_id});
        
        if(!authorizationApp){
            const newAuth = new Authorization({application_id, token});
            await newAuth.save();
        }else{
            const updateAuth = await Authorization.findOneAndUpdate(application_id, {token: token});
        }
    
        res.json({
            application_id,
            token
        });
    }catch(err){
        console.log(err);
    }

};

module.exports = {
    auth
}