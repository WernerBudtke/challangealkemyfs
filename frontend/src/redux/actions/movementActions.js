import axios from 'axios'
const movementActions = {
    getMovements: () => {
        return async (dispatch) => {
            try{
                let res = await axios.get(`http://localhost:4000/api/movements/`)
                if(res.data.success){
                    if(res.data.response.length > 0){
                        dispatch({ type: "ALL_MOVEMENTS", payload:res.data.response })
                        return { success: true }
                    }else{
                        throw new Error("No movement found in DB")
                    }
                }else{
                    throw new Error("Wasn't able to fetch movements")
                } 
            }catch (e){
                return { success: false, response: e.message }
            }
        }
    },
    editMovement: (movement) => {
        return async () => {
            try{
                let res = await axios.put(`http://localhost:4000/api/movement/`, movement)
                if(res.data.success){
                    return {success: true}
                }else{
                    throw new Error("Wasn't able to edit")
                }
            }catch(e){
                return { success: false, response: e.message}
            }
        }
    },
    removeMovement: (id) => {
        return async () => {
            try{
                let res = await axios.delete(`http://localhost:4000/api/movement/${id}`)
                if(res.data.success){
                    return {success: true}
                }else{
                    throw new Error("Wasn't able to remove")
                }
            }catch(e){
                return { success: false, response: e.message}
            }
        }
    }
}
export default movementActions