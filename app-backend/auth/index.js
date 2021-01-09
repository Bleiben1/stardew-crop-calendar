const passport = require('passport')
const SteamStrategy = require('passport-steam').Strategy

passport.serializeUser(function(user, done) {
    done(null, user)
})

passport.deserializeUser(function(obj, done) {
    done(null, obj);
})
  
passport.use(new SteamStrategy({
    returnURL: 'http://localhost:3000/auth/steam/return',
    realm: 'http://localhost:3000/',
    apiKey: process.env.STEAM_API_KEY
    },
    function(identifier, profile, done) {
        process.nextTick(function() {
            profile.identifier = identifier
            return done(null, profile)
        })
    }
))

passport.use(passport.initialize())
passport.use(passport.session())