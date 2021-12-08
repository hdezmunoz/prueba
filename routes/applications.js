'use strict'

const router = require('express').Router();

const { applicationPost, applicationGet, applicationGetById, applicationPut, applicationDelete } = require('../controllers/applications');
const { validarJWT } = require('../middlewares/validar-token');
const {applicationsValidation} = require('../helpers/shcemas-validator');
const validarPayload = require('../middlewares/validar-payload');

//LA CREACIÓN DE APLICACIONES NO SE VALIDÓ TOKEN PARA PERMITIR EL REGISTRO INICIAL, YA QUE NO EXISTEN USUARIOS EN ESTA PRUEBA
router.post('/', 
    validarPayload(applicationsValidation), 
    applicationPost);

router.get('/', 
    validarJWT,
    applicationGet);

router.get('/:id', 
    validarJWT,
    applicationGetById);

router.put('/:id', 
    validarJWT,
    validarPayload(applicationsValidation), 
    applicationPut);

router.delete('/:id', 
    validarJWT,
    applicationDelete);

module.exports = router;