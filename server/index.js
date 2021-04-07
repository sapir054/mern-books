const express = require('express')
const bodyParser = require('body-parser')
const cors = require ('cors')
const app = express()
const dbConnection = require('./DB')
const BookRouter = require('./routs/book-router')
const apiPort = process.env.PORT

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

dbConnection.on('error',()=>{console.log("dbConnection error");})

app.get('/',(req,res)=>{
    res.send('Hello World!')
})
app.use('/books',BookRouter)
app.listen(apiPort,()=>console.log(`Server running on port ${apiPort}`))