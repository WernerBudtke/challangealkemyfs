const Movement = require('../models/Movement')
const movementControllers = {
    addMovement: async (req, res)  => {
        const { concept, amount, date, isProfit } = req.body
        let newMovement = {
            concept,
            amount,
            date,
            isProfit
        }
        try{
            let movementCreated = await Movement.create(newMovement)
            res.json({ success: true, response: movementCreated})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    getMovements: async (req, res) => {
        try{
            let movements = await Movement.findAll({
                raw: true,
                order: [['createdAt', 'DESC']]
            })
            res.json({ success: true, response: movements})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    editMovement: async (req, res) => {
        const { concept, amount, date, id } = req.body
        try{
            await Movement.upsert({id: id, concept, amount, date})
            res.json({ success: true })
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    removeMovement: async (req, res) => {
        const { id } = req.params
        try{
            let movementFound = await Movement.findByPk(id)
            await movementFound.destroy()
            res.json({ success: true })
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    }
}
module.exports = movementControllers