'use strict'

//!Flight Api

const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 8001
const HOST = process.env.HOST || '127.0.0.1'

require('express-async-errors')

//find-sort-pagination
app.use(require('./src/middlewares/findSearchSortPage'))

//json
app.use(express.json()) 



//app.use(require('./src/middlewares/authentication'))

app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Flight API Project'
    })
})

//dbConnection
const {dbConnection} = require('./src/configs/dbConnection')
dbConnection()

//Routes

// app.use('/auth', require('./src/routes/auth'))


app.use('/users', require('./src/routes/userRoute'))
app.use('/flights', require('./src/routes/flightRoute'))
app.use('/reservations', require('./src/routes/reservationRoute'))
app.use('/passengers', require('./src/routes/passengerRoute'))


//errorhandler
app.use(require('./src/middlewares/errorHandler'))



app.listen(PORT, console.log('Server is running on http://' + HOST + ':' + PORT))