const jwt = require('jsonwebtoken');

const Authorization = require('../models/authorization');

const validarJWT = async (req, res, next) => {
    
    const application_id = req.header('application_id');

    if(!application_id){
        return res.status(401).json({
            msg: "No hay id de la aplicación"
        });
    }

    try{

        const AuthApp = await Authorization.findOne({application_id});

        if(!AuthApp){
            return res.status(401).json({
                msg:"No existe la aplicación"
            })
        }

        const {token} = AuthApp;

        if(!token){
            return res.status(401).json({
                msg:"No existe un token para la aplicación"
            })
        }

        const {uid} = jwt.verify(token, process.env.SECRETKEY);

        req.uid = uid;

        next();
    }catch(err){
        res.status(401).json({
            msg: 'Token no válido'
        });
    }

}

module.exports = {
    validarJWT
}