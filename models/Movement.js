const Sequelize = require('sequelize')
const database = require('../config/database')

const Movement = database.define('movement', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    concept: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    date: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    amount: { 
        type: Sequelize.FLOAT,
        defaultValue: 0
    },
    isProfit: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})
module.exports = Movement