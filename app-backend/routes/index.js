const express = require('express')
const router = express.Router()

//const crud = requiere('./crud')
const crop = require('./crop')

module.exports = router

//router.use('/crud', crud)
router.use('/crop', crop)