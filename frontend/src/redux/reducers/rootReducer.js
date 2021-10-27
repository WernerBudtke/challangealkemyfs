import { combineReducers } from "redux"
import movementReducer from "./movementReducer"

const rootReducer = combineReducers({
    movementReducer : movementReducer
})
export default rootReducer