'use strict'

const {mongoose} = require('../configs/dbConnection')



const ReservationSchema = new mongoose.Schema({
    flightId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
        trim: true,
        required: true,
        unique: true
    },
    passengers: [{
        type: String,
        trim: true,
        required: true, 
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
}, {
    collection: 'reservation',
    timestamps: true
})

module.exports=mongoose.model('Reservation', ReservationSchema)