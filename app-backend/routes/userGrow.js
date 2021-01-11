const express = require('express')
const router = express.Router()

const db  = require('../db')

module.exports = router

//get the complete list of crops planted by a user
router.post('/:id', async (req, res) => {
    const {id} = req.params
    const results = await db('user-grow').where({FK_userID: id})
    res.send(results)
})

router.post('/perSeason', async (req, res) => {
    const {userID, seasonID} = req.body
    const results = await db('user-grow').where({FK_userID: id})
    res.send(results)
})