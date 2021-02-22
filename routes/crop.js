const express = require('express')
const router = express.Router()

const db  = require('../db')

module.exports = router

//get the complete list of crops available
router.get('/', async (req, res) => {
    const results = await db.select().table('crop')
    res.send(results)
})

//get the data of a crop defined by it ID
router.get('/:id', async (req, res) => {
    const {id} = req.params
    const results = await db('crop').where({cropID: id})
    res.send(results)
})