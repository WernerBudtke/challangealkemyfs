import axios from 'axios'
const movementActions = {
    getMovements: () =>{
        return async (dispatch) => {
            try{
                let res = await axios.get(`http://localhost:4000/api/movements/`)
                if(res.data.success){
                    if(res.data.response.length > 0){
                        dispatch({type: "ALL_MOVEMENTS", payload:res.data.response})
                        return {success:true}
                    }else{
                        throw new Error("No movement found in DB")
                    }
                }else{
                    throw new Error(res.data.response)
                } 
            }catch (err){
                return {success:false, response: err}
            }
        }
    },
}
export default movementActions