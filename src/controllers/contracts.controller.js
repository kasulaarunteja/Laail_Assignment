const express = require('express')

const Contract = require('../model/contracts.model')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const contract = await Contract.create(req.body)
    res.send(contract)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

router.get('/', async (req, res) => {
  try {
    const contract = await Contract.find().lean().exec()
    res.send(contract)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const contract = await Contract.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    return res.send(contract)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const contract = await Contract.findByIdAndDelete(req.params.id)
      .lean()
      .exec()

    return res.send(contract)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

module.exports = router
