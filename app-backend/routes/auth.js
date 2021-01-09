const express = require('express')
const router = express.Router()
const passport = require('passport')

const db  = require('../db')

module.exports = router

router.get('/steam', 
    passport.authenticate('steam', {failureRedirect: '/'}), function(req, res) {
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