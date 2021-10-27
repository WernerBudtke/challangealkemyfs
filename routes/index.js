const express = require('express')
const router = express.Router()
const movementControllers = require('../controllers/movementControllers')

router.route('/movements/manage/add')
.post(movementControllers.addMovement)
router.route('/movements/')
.get(movementControllers.getMovements)


module.exports = router