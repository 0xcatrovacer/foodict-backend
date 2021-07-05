const express = require('express')

const User = require('../models/user')

const router = new express.Router()


// Create User
router.post('/createaccount', async (req, res) => {
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send({ user })
    } catch (e) {
        res.status(500).send(e)
    }
})