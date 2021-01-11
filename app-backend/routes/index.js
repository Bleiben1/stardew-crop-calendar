const express = require('express')
const router = express.Router()

//const crud = requiere('./crud')
const crop = require('./crop')
const auth = require('./auth')
const season = require('./season')

module.exports = router

//router.use('/crud', crud)
router.use('/crop', crop)
router.use('/auth', auth)
router.use('/season', season)