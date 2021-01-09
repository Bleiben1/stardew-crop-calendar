const express = require('express')
const router = express.Router()

//const crud = requiere('./crud')
const crop = require('./crop')
const auth = require('./auth')

module.exports = router

//router.use('/crud', crud)
router.use('/crop', crop)
router.use('/auth', auth)