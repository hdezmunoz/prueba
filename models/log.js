const {Schema, model} = require('mongoose');

const LogSchema = Schema({
    application_id:{
        type: Schema.Types.ObjectId,
        ref: 'Application',
        required: true
    },
    type: {
        type: String,
        required: true,
        enum:['error', 'info', 'warning']
    },
    priority:{
        type: String,
        required: true,
        enum: ['lowest', 'low', 'medium', 'high', 'highest']
    },
    path:{
        type: String
    },
    message:{
        type: String
    }, 
    request:{
        type: Schema.Types.Mixed
    },
    response:{
        type: Schema.Types.Mixed
    }
},{
    timestamps: true
});

module.exports = model('Log', LogSchema);