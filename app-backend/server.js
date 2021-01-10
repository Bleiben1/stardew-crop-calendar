const routes = require("./routes")

const express = require('express')
const passport = require('passport')
const util = require('util')
const session = require('express-session')
const SteamStrategy = require('passport-steam').Strategy
const { profile } = require("console")
const db = require('./db')

const app = express()
const port = 3001

passport.serializeUser(function(user, done) {
    const userID = user.id,
        userDisplayName = user.displayName,
        userPhoto = user.photos[0].value
    done(null, {userID, userDisplayName, userPhoto})
})

passport.deserializeUser(function({userID, userDisplayName, userPhoto}, done) {
    try{
        console.log('user inside deserialize = ', {userID, userDisplayName, userPhoto})
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
  /*function(identifier, profile, done) {
    process.nextTick(function () {
      profile.identifier = identifier
      return done(null, profile)
    })
  }*/
  async function(identifier, profile, done) {
      console.log("checking if user is already in database or newone")
      const user = await db('user').where({userID: profile.id}).first()
      console.log("user => ", user)
      if (!user) {
          console.log("new user in database!!")
        const userID = profile.id,
        userDisplayName = profile.displayName,
        userPhoto = profile.photos[0].value
        await db('user').insert({userID: userID, 
                                userDisplayName: userDisplayName,
                                haveAgriculturist: false, 
                                userPhoto: userPhoto}
                            ).returning('*')
      }
      return done(null, profile)
  }
))

app.use(session({
    secret: process.env.SESSION_SECRET,
    name: 'StardewCropCalendar session id',
    resave: true,
    saveUninitialized: false}))

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