const express = require('express')
const router = express.Router()

module.exports = router


const db  = require('../db')

//get the complete list of crops planted by a user
router.post('/getAllCropPlanted/:id', async (req, res) => {
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

//save the data of a newly planted crop*/
router.post('/saveUserGrow', (req, res) => {
    const {test1, test22} = req.body
    console.log('req.body => ', req.body)
    res.status(300).send({test1, test22})
})