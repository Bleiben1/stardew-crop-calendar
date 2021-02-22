const express = require('express')
const router = express.Router()

//const crud = requiere('./crud')
const crop = require('./crop')
const auth = require('./auth')
const season = require('./season')
const cropSeason = require('./cropSeason')
const userGrow = require('./userGrow')
const user = require('./user')

//router.use('/crud', crud)
router.use('/crop', crop)
router.use('/auth', auth)
router.use('/season', season)
router.use('/cropSeason', cropSeason)
router.use('/userGrow', userGrow)
router.use('/user', user)

module.exports = router