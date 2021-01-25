const express = require('express')
const router = express.Router()

module.exports = router

const db = require('../db')

router.put('/updateHaveAgriculturist', async (req, res) => {
    const {userID, haveAgriculturist} = req.body
    const results = await db('user')
        .where({ userID })
        .update({ haveAgriculturist })
        .returning('*')
    res.status(300).send(results)
})