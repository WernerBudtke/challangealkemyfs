import { useState } from "react"
import axios from 'axios'
import { connect } from "react-redux"
import movementActions from "../redux/actions/movementActions"
const Form = (props) => {
    const [newOperation, setNewOperation] = useState({
        concept:"",
        amount:0,
        date:"",
        isProfit: false
    })
    const inputHandler = (e) => {
        setNewOperation({
            ...newOperation,
            [e.target.name] : e.target.name === "isProfit" ? e.target.checked : e.target.value
        })
    }
    const [renderError, setRenderError] = useState(false)
    const submitHandler = async () => {
        if(Object.values(newOperation).indexOf("") !== -1){
            setRenderError(true)
            return false
        }else{
            await axios.post('http://localhost:4000/api/movements/manage/add', {...newOperation})
            await props.getMovements()
            setRenderError(false) 
            props.history.push('/')
        }      
    }
    return(
        <>
            <main id="mainForm">
                <h2>Add new Operation</h2>
                <div>
                    <label htmlFor="concept">Concept:</label>
                    <input type="text" name="concept" id="concept" onChange={inputHandler} value={newOperation.concept}/>
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="date" id="date" onChange={inputHandler} value={newOperation.date}/>
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" min={0} name="amount" id="amount" onChange={inputHandler} value={newOperation.amount}/>
                </div>
                <div>
                    <label htmlFor="isProfit">Is Profit?</label>
                    <input type="checkbox" name="isProfit" id="isProfit" onChange={inputHandler} value={newOperation.isProfit}/>
                </div>
                {renderError && <p className="formError">PLEASE COMPLETE ALL FIELDS</p>}
                <button onClick={submitHandler}>ADD OPERATION</button>
            </main>
        </>
    )
}
const mapDispatchToProps = {
    getMovements: movementActions.getMovements
}
export default connect(null, mapDispatchToProps)(Form)