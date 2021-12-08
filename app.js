require('dotenv').config();

const db = require('./database/config')

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/authorization', require('./routes/authorizations'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/logs', require('./routes/logs'));
// app.use('/api', require('./routes/main.routes'));

db.dbConnection().then(() => {
    app.listen(3006, () => {
        console.log(`Corriendo`)
    })
})


module.exports = app;
