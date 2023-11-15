'use strict'

const router = require('express').Router()
const flight = require('../controllers/flightController')

router.route('/')
        .get(flight.list)
        .post(flight.create)
router.route('/:id')
        .get(flight.read)
        .put(flight.update)
        .delete(flight.delete)



module.exports = router