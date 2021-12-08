const jwt = require('jsonwebtoken');
const { token } = require('morgan');

const generarToken = (uid = '') => {

    return new Promise((resolve, reject) => {

        const payload = {uid};

        jwt.sign(payload, process.env.SECRETKEY,{
            expiresIn: '1h'
        }, (err, token) => {
            if(err){
                console.log(err);
                reject("Error creando token")
            }else{
                resolve(token)
            }
        })
    })
}

module.exports = {
    generarToken
}