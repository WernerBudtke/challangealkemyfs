import { combineReducers } from "redux"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    usersRed : userReducer
})
export default rootReducer