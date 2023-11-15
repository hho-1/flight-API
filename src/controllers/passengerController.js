'use strict'


const Passenger = require('../models/passengerModel')

module.exports={
    list: async (req, res) => {
        const data = await res.getModelList(Passenger)

        res.status(200).send({
            error: false,
            detail: await res.getModelListDetails(Passenger),
            data
        })
    },
    create: async (req, res) => {
        const data = await Passenger.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },
    read: async (req, res) => {
        const data = await Passenger.findOne({_id: req.params.id})

        res.status(200).send({
            error: false,
            data
        })
    },
    update: async (req, res) => {
        const data = await Passenger.updateOne({_id: req.params.id}, req.body, {runValidators: true})

        res.status(202).send({
            error: false,
            new: await Passenger.findOne({_id: req.params.id}),
            data
        })
    },
    delete: async (req, res) => {
        const data = await Passenger.deleteOne({_id: req.params.id})

        res.status(data.deletedCount ? 202 : 404).send({
            error: false,
            data
        })
    },
}