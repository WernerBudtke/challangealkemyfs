const express = require('express')
require('./config/database')
const database = require('./config/database')
const router = require('./routes/index')
const app = express()
app.use(cors())
app.use(express.static('public'))
const PORT = 4000
const HOST = 'localhost'
database.sync()
.then(() =>{
    app.use('/', router)
    app.listen(PORT, HOST, () => console.log("Server listening"))
})