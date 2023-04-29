require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express');
const workoutRoutes = require('./routes/workouts')
const app = express();

// middlewares
app.use(express.json()); // to catch data for post requests

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
    console.log('listening for requests on port', process.env.PORT)
    })
})
.catch((err) => {
    console.log(err)
}) 



