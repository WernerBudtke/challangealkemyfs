const initState = {
    firstName: null,
    eMail: null
}
const userReducer = (state = initState, action) =>{
    switch(action.type){
        case 'USER_LOGGED':
            return{
               ...action.payload,
            }
        case 'LOGOUT':
            return initState
        default:
            return state
    }
}
export default userReducer