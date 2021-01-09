const routes = require("./routes")

const express = require('express')
const passport = require('./auth')
const app = express()
const port = 3001

//app.use(passport.initialize())
//app.use(passport.session())

app.use('/', routes)

app.listen(port, () => {
    console.log("Listeneing on port " + port)
})