const routes = require("./routes")

const express = require('express')
const passport = require('passport')
const util = require('util')

const SteamStrategy = require('passport-steam').Strategy
const authRoutes = require('./routes/auth')

const app = express()
const port = 3001

passport.serializeUser(function(user, done) {
    const userID = user.id,
        userDisplayName = user.displayName,
        userPhoto = user.photos[0].value
    console.log('user before serialize = ', {userID, userDisplayName, userPhoto})
    done(null, {userID, userDisplayName, userPhoto})
})

passport.deserializeUser(function(obj, done) {
    try{
        done(null, {userID, userDisplayName, userPhoto})
    }catch(err){
        done(err, null)
    }
})

passport.use(new SteamStrategy({
    returnURL: 'http://localhost:3001/auth/steam/return',
    realm: 'http://localhost:3001/',
    apiKey: process.env.STEAM_API_KEY
  },
  function(identifier, profile, done) {
    process.nextTick(function () {
      profile.identifier = identifier
      return done(null, profile)
    })
  }
))

/*app.use(session({
    secret: 'your secret',
    name: 'name of session id',
    resave: true,
    saveUninitialized: true}))*/

app.use(passport.initialize())
app.use(passport.session())

app.get('/', function(req, res){
    console.log('req en / =>', req.user)
    res.status(300).send('estoy en /')
})
  
app.get('/account', ensureAuthenticated, function(req, res){
    console.log('req en /account =>', req.user)
    res.status(300).send('estoy en /account')
})
  
app.get('/logout', function(req, res){
    console.log('entering /logout')
    req.logout()
    res.redirect('/')
})

app.use('/', routes)

app.listen(port, () => {
    console.log("Listeneing on port " + port)
})

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
  }