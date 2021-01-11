const express = require('express')
const router = express.Router()

const db  = require('../db')

module.exports = router

//get the complete list of seasons
router.get('/', async (req, res) => {
    const results = await db.select().table('season')
    res.send(results)
})

//get the data of a season defined by it ID
router.get('/:id', async (req, res) => {
    const {id} = req.params
    const results = await db('season').where({seasonID: id})
    res.send(results)
})