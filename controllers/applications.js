const Application = require('../models/application');

const applicationPost = async (req, res) => {

    try{
        const name = req.body.name.toLowerCase();
    
        const application = new Application({name});
    
        await application.save();
    
        res.json({
            application
        });

    }catch(err){
        res.status(401).json({
            msg:"Ocurrió un error al crear la aplicación"
        });
    }
    
}

const applicationGet = async (req, res) => {

    try{
        const applications = await Application.find();
    
        res.json({
            applications
        });

    }catch(err){
        res.status(401).json({
            msg:"Ocurrió un error al obtener las aplicaciones"
        })
    }
}

const applicationGetById = async(req, res) => {

    try{
        const {id} = req.params;
        const application = await Application.findById(id); 

        res.json({
            application
        })

    }catch(err){
        res.status(401).json({
            msg:"Ocurrió un error al obtener la aplicación"
        });
    }
}

const applicationPut = async(req, res) => {
    
    try{

        const {name} = req.body;
        const {id} = req.params;

        const application = await Application.findByIdAndUpdate(id, {name}, {new: true});

        res.json({
            application
        });

    }catch(err){
        res.status(401).json({
            msg:"Ocurrió un error al actualizar la aplicación"
        });
    }
}

const applicationDelete = async (req, res) => {

    try{

        const {id} = req.params;

        const application = await Application.findByIdAndDelete(id);

        res.json({
            msg: "Aplicación eliminada correctamente"
        })
        
    }catch(err){
        res.status(401).json({
            msg:"Ocurrió un error al eliminar la aplicación"
        });
    }
}

module.exports = {
    applicationPost,
    applicationGet,
    applicationGetById,
    applicationPut,
    applicationDelete
}