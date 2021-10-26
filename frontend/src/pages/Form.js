import { useState } from "react"
const Form = () => {
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
    const submitHandler = () => {
        if(Object.values(newOperation).indexOf("") !== -1){
            setRenderError(true)
            return false
        }else{
            console.log(newOperation)
            setRenderError(false) 
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
export default Form