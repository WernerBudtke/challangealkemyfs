const initState = {
    movements: null,
    lastMovements: null,
    balance: null
}
const movementReducer = (state = initState, action) =>{
    switch(action.type){
        case 'ALL_MOVEMENTS':
            return {
                movements: action.payload,
                lastMovements: action.payload.slice(0, 10),
                balance: action.payload.reduce((previousValue, currentValue) => {
                    if(currentValue.isProfit){
                        return previousValue + currentValue.amount
                    }else{
                        return previousValue - currentValue.amount
                    }
                },0),
            }
        default:
            return state
    }
}
export default movementReducer