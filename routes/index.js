const express = require('express')
const router = express.Router()
const movementControllers = require('../controllers/movementControllers')

router.route('/movements/add')
.post(movementControllers.addMovement)

module.exports = router