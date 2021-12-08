const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const logsValidation = Joi.object({
    application_id: Joi.objectId().required(),
    type: Joi.string().valid("error", "info", "warning").required(),
    priority: Joi.string().valid("lowest", "low", "medium", "high", "highest").required(),
    path: Joi.string(),
    message: Joi.string(),
    request: Joi.alternatives().try(Joi.string(), Joi.object()),
    response: Joi.alternatives().try(Joi.string(), Joi.object())
});

const applicationsValidation = Joi.object({
    name: Joi.string()
});

const authorizationValidation = Joi.object({
    application_id: Joi.objectId().required(),
    token: Joi.string().required()
})


module.exports = {
    logsValidation,
    applicationsValidation,
    authorizationValidation
}