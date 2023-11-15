'use strict'

const {mongoose} = require('../configs/dbConnection')



const PassengerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'First name is required'],
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Last name is required'], 
    },
    gender: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Email is required'],
        unique: [true, 'This email has already been taken'],
        validate: [(email)=> email.includes('@') && email.includes('.'), 'Please enter an email']
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
}, {
    collection: 'passenger',
    timestamps: true
})

module.exports=mongoose.model('Passenger', PassengerSchema)