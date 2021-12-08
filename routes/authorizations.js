'use strict'

const router = require('express').Router();
const { auth } = require('../controllers/authorizations');

router.post('/', auth)

module.exports = router;