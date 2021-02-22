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
router.post('/perSeason/', async (req, res) => {
    const {FK_userID, FK_seasonID} = req.body
    const results = await db('user-grow')
    .where({FK_userID, FK_seasonID})
    res.status(300).send(results)
})

//save the data of a newly planted crop
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

//save changes to values of one crop planted
router.put('/updateUserGrow', async (req, res) => {
    const   {
        userGrowID,
        haveSpeedGro,
        haveDeluxeSpeedGro,
        dayOfSeason
    } = req.body
    const results = await db('user-grow')
        .where({ userGrowID })
        .update({ haveSpeedGro, haveDeluxeSpeedGro, dayOfSeason })
        .returning('*')
    res.status(300).send(results)
})

router.delete('/deleteUserGrow', async (req, res) => {
    const { userGrowID } = req.body
    const results = await db('user-grow')
        .where({ userGrowID })
        .del()
        .returning('*')
    res.status(300).send(results)
})

router.get('/testAuth', (req, res) => {
    console.log("req.isAutenticated() => ", req.isAuthenticated())
    res.status(300).send("results")
})