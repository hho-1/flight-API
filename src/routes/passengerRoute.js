'use strict'

const router = require('express').Router()
const passenger = require('../controllers/passengerController')

const permissions = require('../middlewares/permissions')

router.use(permissions.isStaff)

router.route('/')
        .get(passenger.list)
        .post(passenger.create)
router.route('/:id')
        .get(passenger.read)
        .put(passenger.update)
        .delete(passenger.delete)



module.exports = router