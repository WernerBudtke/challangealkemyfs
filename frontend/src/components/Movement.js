import { useEffect, useState } from "react"
import { connect } from "react-redux"
import movementActions from "../redux/actions/movementActions"
const Movement = (props) => {
    const {movement, index, getMovements, editMovement, removeMovement} = props
    const [editing, setEditing] = useState(false)
    const [newMovement, setNewMovement] = useState({
        amount: '',
        concept: '',
        date: ''
    })
    useEffect(() => {
        setNewMovement({
            ...movement
        })
    }, [movement])
    const inputHandler = (e) => {
        setNewMovement({
            ...newMovement,
            [e.target.name] : e.target.value
        })
    }
    const confirmEdit = async (e) => {
        let res = await editMovement(newMovement)
        if(res.success){
            await getMovements()
            setEditing(false)
        }else{
            alert("Wasn't able to edit")
            props.history.push('/')
        }
    }
    const deleteEntry = async (id) => {
        let res = await removeMovement(id)
        if(res.success){
            await getMovements()
        }else{
            alert("Wasn't able to remove")
            props.history.push('/')
        }
    }
    return (
        !editing ? 
        <div className="movementContainer">
            <p className={`${movement.isProfit ? 'isProfit' : 'isLoss'}`} onClick={() => setEditing(true)}>{`${index + 1} - ${movement.amount} - ${movement.concept} - ${movement.date}`}</p>
            <p className="editDeleteButtons" onClick={() => deleteEntry(movement.id)}>🗑️</p>
        </div>
        :
        <div className="movementContainer">
            <div>
                <label htmlFor="amount">Amount:</label>
                <input type="number" name="amount" value={newMovement.amount} onChange={inputHandler}/>
            </div>
            <div>
                <label htmlFor="concept">Concept:</label>
                <input type="text" name="concept" value={newMovement.concept} onChange={inputHandler}/>
            </div>
            <div>
                <label htmlFor="date">Date:</label>
                <input type="date" name="date" value={newMovement.date} onChange={inputHandler}/>
            </div>
            <p className="editDeleteButtons" style={editing ? {display: "block"} : {display: "none"}} onClick={confirmEdit}>✔️</p>
            <p className="editDeleteButtons" style={editing ? {display: "block"} : {display: "none"}} onClick={() => setEditing(false)}>❌</p> 
        </div>
    )
}
const mapDispatchToProps = {
    getMovements: movementActions.getMovements,
    editMovement: movementActions.editMovement,
    removeMovement: movementActions.removeMovement
}
export default connect(null, mapDispatchToProps)(Movement)