const express = requiere('express')

const app = express()
const port = 3001

app.listen(port, () => {
    console.log("Listeneing on port " + port)
})