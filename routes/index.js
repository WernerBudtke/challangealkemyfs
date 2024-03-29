const express = require('express')
const router = express.Router()
const movementControllers = require('../controllers/movementControllers')

router.route('/movements/manage/add')
.post(movementControllers.addMovement)
router.route('/movements/')
.get(movementControllers.getMovements)
router.route('/movement/')
.put(movementControllers.editMovement)
router.route('/movement/:id')
.delete(movementControllers.removeMovement)

module.exports = router