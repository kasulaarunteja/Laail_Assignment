const express = require('express')

const User = require('../model/users.model')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

router.get('/', async (req, res) => {
  try {
    const user = await User.find().lean().exec()
    res.send(user)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    return res.send(user)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec()

    return res.send(user)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

module.exports = router
