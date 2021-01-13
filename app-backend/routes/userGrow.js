const express = require('express')
const router = express.Router()

const db  = require('../db')


module.exports = router

//get the complete list of crops planted by a user
router.post('/:id', async (req, res) => {
    const {id} = req.params
    const results = await db('user-grow').where({FK_userID: id})
    console.log('results => ', results)
    res.send(results)
})

//get list of crops planted by a user during a specific season
router.post('/perSeason/:user/:season', async (req, res) => {
    const {user, season} = req.params
    const results = await db('user-grow')
    .where({FK_userID: user,
    FK_seasonID: season})
    console.log('results => ', results)
    res.send(results)
})

