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
router.post('/saveUserGrow', async (req, res) => {
    const   {
                userID, 
                cropID,
                haveSpeedGro,
                haveDeluxeSpeedGro,
                dayOfSeason,
                isHarvest,
                seasonID
            } = req.body
    const results = await db('user-grow').insert(
        {
            FK_userID: userID, 
            FK_cropID: cropID,
            haveSpeedGro: haveSpeedGro,
            haveDeluxeSpeedGro: haveDeluxeSpeedGro,
            dayOfSeason: dayOfSeason,
            isHarvest: isHarvest,
            FK_seasonID: seasonID
        }
    ).returning('*')
    res.status(300).send(results)
})