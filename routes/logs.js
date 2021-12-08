'use strict'

const router = require('express').Router();
const { logsPost, logsGet, logGetById, logPut, logDelete} = require('../controllers/logs');
const { validarJWT } = require('../middlewares/validar-token');
const {logsValidation} = require('../helpers/shcemas-validator');
const validarPayload = require('../middlewares/validar-payload');

router.post('/', 
    validarJWT,
    validarPayload(logsValidation),    
    logsPost);

router.get('/',
    validarJWT,
    logsGet
)

router.get('/:id', 
    validarJWT,
    logGetById);

router.put('/:id', 
    validarJWT,
    validarPayload(logsValidation), 
    logPut);

router.delete('/:id', 
    validarJWT,
    logDelete);

module.exports = router;