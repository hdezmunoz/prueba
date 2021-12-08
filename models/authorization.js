const {Schema, model} = require('mongoose');

const AuthorizationSchema = Schema({
    application_id:{
        type: Schema.Types.ObjectId,
        ref: 'Application',
        required: true
    },
    token: {
        type: String
    }
},{
    timestamps: true
});

module.exports = model('Authorization', AuthorizationSchema);