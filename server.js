const express = require('express')
const router = require('./routes/index')
const cors = require('cors')
const app = express()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('','root','',{
    host: 'localhost',
    dialect: 'mysql'
})
async function initialize(){
    await sequelize.query("CREATE DATABASE IF NOT EXISTS `alkemy`;")
    require('./config/database')
    const database = require('./config/database')
    app.use(cors())
    app.use(express.json())
    app.use(express.static('public'))
    const PORT = 4000
    const HOST = 'localhost'
    database.sync()
    .then(() =>{
        app.use('/api', router)
        app.listen(PORT, HOST, () => console.log("Server listening"))
    })
}
initialize()