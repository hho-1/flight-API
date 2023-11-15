'use strict'

const {mongoose} = require('../configs/dbConnection')



const FlightSchema = new mongoose.Schema({
    flightNumber: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    airline: {
        type: String,
        trim: true,
        required: true, 
    },
    departure: {
        type: String,
        trim: true,
        required: true,
    },
    departureDate: {
        type: Date,
        trim: true,
        required: true,
    },
    arrival: {
        type: String,
        required: true,
        trim: true,
    },
    arrivalDate: {
        type: Date,
        trim: true,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    collection: 'flight',
    timestamps: true
})

module.exports=mongoose.model('Flight', FlightSchema)