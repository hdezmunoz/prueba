const {Schema, model} = require('mongoose');

const ApplicationSchema = Schema({
    name:{
        type: String
    }
},{
    timestamps: true
});

module.exports = model('Application', ApplicationSchema);