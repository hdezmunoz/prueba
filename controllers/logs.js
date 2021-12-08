const Log = require('../models/log');

const logsPost = async (req, res) => {

    try{
        const {application_id, type, priority, path, message, request, response} = req.body; 
    
        const log = new Log({application_id, type, priority, path, message, request, response});
    
        await log.save();
        
        res.json({
            log
        })
    }catch(err){
        res.json({
            msg:"Error al crear el log"
        })
    }

}

const logsGet = async (req, res) => {
    try{

        const logs = await Log.find().populate('application_id', 'name');

        res.send({
            logs
        });

    }catch(err){
        console.log(err)
        res.status(401).json({
            msg:"Ocurrió un error al obtener los logs"
        })
    }
}

const logGetById = async (req, res) => {
    
    try{

        const {id} = req.params;
        const log = await Log.findById(id); 

        res.json({
            log
        })
        
    }catch(err){
        res.status(401).json({
            msg:"Ocurrió un error al obtener el log"
        })
    }
}

const logPut = async(req, res) => {
    
    try{

        const {id} = req.params;
        const data = req.body;

        const log = await Log.findByIdAndUpdate(id, data, {new: true});

        res.json({
            log
        });

    }catch(err){
        res.status(401).json({
            msg:"Ocurrió un error al actualizar el log"
        });
    }
}

const logDelete = async (req, res) => {

    try{

        const {id} = req.params;

        const log = await Log.findByIdAndDelete(id);

        res.json({
            msg: "Log eliminado correctamente"
        })
        
    }catch(err){
        res.status(401).json({
            msg:"Ocurrió un error al eliminar el log"
        });
    }
}

module.exports = {
    logsPost,
    logsGet,
    logGetById,
    logPut,
    logDelete
}