const mongoose = require('mongoose')
const dbConnectionString= process.env.DB
mongoose

    .connect(dbConnectionString, { useNewUrlParser: true })
    .then(()=>{console.log('MongoDB Conection')})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
