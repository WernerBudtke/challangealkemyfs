const Movement = require('../models/Movement')
const movementControllers = {
    addMovement: async (req, res)  => {
        console.log(req.body)
        // let newUser = {
        //     username,
        //     password: hashedPass
        // }
        // try{
        //     await User.create(newUser)
        //     res.render('login', {
        //         loggedIn: false,
        //         user: null,
        //         title: 'Log In',
        //         error: null,
        //         userCreated: true
        //     })
        // }catch(e){
        //     res.render('register', {
        //         loggedIn: false,
        //         user: null,
        //         title: 'Register',
        //         error: e.message
        //     })
        // }
    },
}
module.exports = movementControllers