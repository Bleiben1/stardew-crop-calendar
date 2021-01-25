const express = require('express')
const router = express.Router()
const passport = require('passport')
const { orWhereNotExists } = require('../db')

const db  = require('../db')

module.exports = router

/*router.get('/steam', 
    passport.authenticate('steam', {failureRedirect: '/'}), function(req, res) {
        res.redirect('/')
    }
)

router.get('/steam/return',
    function(req, res, next) {
        req.url = req.originalUrl
        console.log("req.url => ", req.url)
        next()
    },
    passport.authenticate('steam', {failureRedirect: '/'}),
    function(req, res) {
        res.redirect('/')
    }
)*/

const CLIENT_HOME_PAGE_URL = "http://localhost:3000"

//when login is successful, retrieve user info
router.get('/success', (req, res) => {
    if (req.user) {
        res.json({
            success: true,
            message: "User has successfully authenticated",
            user: req.user,
            cookies: req.cookies
        })
    }
})

//when login failed, send failed message
router.get('failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: "user failed to authenticate"
    })
})

//when logout redirect to client
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect(CLIENT_HOME_PAGE_URL)
})

//auth with steam
router.get("/steam", passport.authenticate("steam"));

//redirect to home page after successfully login via Steam
router.get('/steam/redirect', passport.authenticate('steam', {  
    successRedirect: CLIENT_HOME_PAGE_URL,
    failedRedirect: '/auth/failed'
    })
)