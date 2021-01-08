const routes = require("./routes")

const express = require('express')

const app = express()
const port = 3001

app.use('/', routes)

app.listen(port, () => {
    console.log("Listeneing on port " + port)
})