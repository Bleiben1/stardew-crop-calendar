const express = require('express')
const router = express.Router()

const db  = require('../db')

module.exports = router

const passport = require('../auth')

router.get('/steam', 
    passport.authenticate('steam', {failureRedirect: '/'}), function(req, res) {
        console.log("req.user => ", req.user)
        res.redirect('/')
    }
)

router.get('/steam/return',
    function(req, res, next) {
        req.url = req.originalUrl
        next()
    },
    passport.authenticate('steam', {failureRedirect: '/'}),
    function(req, res) {
        res.redirect('/')
    }
)