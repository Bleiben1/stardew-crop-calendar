const express = require('express')
const router = express.Router()

const db  = require('../db')

module.exports = router

router.get('/getSeasonPerCrop/:id', async (req, res) => {
    const {id} = req.params
    const results = await db('crop-season').where({FK_cropID: id})
    res.send(results)
})

router.get('/getCropPerSeason/:id', async (req, res) => {
    const {id} = req.params
    const results = await db('crop-season')
        .join('crop', 'crop-season.FK_cropID', 'crop.cropID')
        .select('crop.cropID', 'crop.cropName', 'crop.imgURL', 'crop.grow', 'crop.regrowth')
        .where({FK_seasonID: id})
    res.send(results)
})