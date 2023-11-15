'use strict'


const Flight = require('../models/flightModel')

module.exports={
    list: async (req, res) => {
        const data = await res.getModelList(Flight)

        res.status(200).send({
            error: false,
            detail: await res.getModelListDetails(Flight),
            data
        })
    },
    create: async (req, res) => {
        const data = await Flight.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },
    read: async (req, res) => {
        const data = await Flight.findOne({_id: req.params.id})

        res.status(200).send({
            error: false,
            data
        })
    },
    update: async (req, res) => {
        const data = await Flight.updateOne({_id: req.params.id}, req.body, {runValidators: true})

        res.status(202).send({
            error: false,
            new: await Flight.findOne({_id: req.params.id}),
            data
        })
    },
    delete: async (req, res) => {
        const data = await Flight.deleteOne({_id: req.params.id})

        res.status(data.deletedCount ? 202 : 404).send({
            error: false,
            data
        })
    },
}