const Sequelize = require('sequelize')
const database = new Sequelize('alkemy','root','',{
    host: 'localhost',
    dialect: 'mysql'
})
module.exports = database