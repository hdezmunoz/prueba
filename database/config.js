const mongoose = require('mongoose');

const dbConnection = async () => {
    
    try{
        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        });

        console.log("Conexión exitosa a la BD")
    }
    catch(err){
        console.log(err);
        throw new Error('Error a la hora de iniciar la BD');
    }
}

module.exports ={
    dbConnection
}