const routes = require("./routes")

const express = require('express')
const passport = require('passport')
const session = require('express-session')
const SteamStrategy = require('passport-steam').Strategy
const { profile } = require("console")
const db = require('./db')

const app = express()
const port = 3001

app.use(express.json())

passport.serializeUser(function(user, done) {
    const userID = user.userID,
        userDisplayName = user.userDisplayName,
        haveAgriculturist = user.haveAgriculturist,
        userPhoto = user.userPhoto
    done(null, {userID, userDisplayName, haveAgriculturist, userPhoto})
})

passport.deserializeUser(function(user, done) {
    try{
        const userID = user.userID,
        userDisplayName = user.userDisplayName,
        haveAgriculturist = user.haveAgriculturist,
        userPhoto = user.userPhoto
        console.log('user inside deserialize => ', user)
        done(null, {userID, userDisplayName, haveAgriculturist, userPhoto})
    }catch(err){
        done(err, null)
    }
})

passport.use(new SteamStrategy({
    returnURL: 'http://localhost:3001/auth/steam/redirect',
    realm: 'http://localhost:3001/',
    apiKey: process.env.STEAM_API_KEY
  },
  async function(identifier, profile, done) {
      console.log("checking if user is already in database or newone")
      const user = await db('user').where({userID: profile.id}).first()
      if (!user) {
        const userID = profile.id,
        userDisplayName = profile.displayName,
        userPhoto = profile.photos[0].value
        user = await db('user').insert({userID: userID, 
                                userDisplayName: userDisplayName,
                                userPhoto: userPhoto}
                            ).returning('*')
      }
      return done(null, user)
  }
))

app.use(session({
    secret: process.env.SESSION_SECRET,
    name: 'StardewCropCalendar session id',
    resave: true,
    saveUninitialized: false}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/', ensureAuthenticated, function(req, res){
    res.status(200).json({
        authenticated: true,
        message: "user successfully authenticated",
        user: req.user,
        cookies: req.cookies
    })
})
  
app.get('/account', ensureAuthenticated, function(req, res){
    res.status(300).send('estoy en /account')
})
  
app.get('/logout', function(req, res){
    req.logout()
    res.redirect('/')
})

app.use('/', routes)

app.listen(port, () => {
    console.log("Listeneing on port " + port)
})

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.status(401).json({
        authenticated: false,
        message: "user has not been authenticated"
    })
  }