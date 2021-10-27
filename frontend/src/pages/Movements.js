import { useEffect } from 'react'
import { connect } from 'react-redux'
import movementActions from '../redux/actions/movementActions'
import Movement from '../components/Movement'
const Movements = (props) => {
    const { movements, getMovements, balance } = props
    useEffect(()=>{
        if(!movements){
            getMovements().then((res) => {
                !res && alert('Something went wrong, please reload')
            })
        }
        // eslint-disable-next-line
    },[])

    if(!movements) {
        return (
            <>
                <main>
                    <h2>Personal Finances</h2>
                    <h3>Balance: Loading ...</h3>
                    <h4>All movements:</h4>
                    <div id="balancesContainer">
                        <p>Loading ...</p>
                    </div>
                </main>
            </>
        )
    }
    return(
        <>
            <main id="mainMovements">
                <h2>Personal Finances</h2>
                <h3 className={`${balance > 0 ? 'isProfit' : 'isLoss'}`}>Balance: {`${balance}`}$</h3>
                <h4>All movements:</h4>
                <div id="balancesContainer">
                    {movements.map((movement, index) => <Movement key={movement.id} movement={movement} index={index}/>)}
                </div>
            </main>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        movements: state.movementReducer.movements,
        balance: state.movementReducer.balance
    }
}
const mapDispatchToProps = {
    getMovements: movementActions.getMovements
}
export default connect(mapStateToProps, mapDispatchToProps)(Movements)