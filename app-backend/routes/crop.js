const express = require('express')
const router = express.Router()

const db  = require('../db')

module.exports = router

router.get('/getCropList', async (req, res) => {
    const results = await db.select().table('crop')
    res.send(results)
})