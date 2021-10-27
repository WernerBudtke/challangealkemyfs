import { useEffect } from 'react'
import { connect } from 'react-redux'
import movementActions from '../redux/actions/movementActions'
const Home = (props) => {
    const { lastMovements, getMovements, balance } = props
    useEffect(()=>{
        if(!lastMovements){
            getMovements().then((res) => {
                !res && alert('Something went wrong, please reload')
            })
        }
        // eslint-disable-next-line
    },[])
    if(!lastMovements) {
        return (
            <>
                <main>
                    <h2>Personal Finances</h2>
                    <h3>Balance: Loading ...</h3>
                    <h4>Last movements:</h4>
                    <div id="balancesContainer">
                        <p>Loading ...</p>
                    </div>
                </main>
            </>
        )
    }
    return(
        <>
            <main>
                <h2>Personal Finances</h2>
                <h3 className={`${balance > 0 ? 'isProfit' : 'isLoss'}`}>Balance: {`${balance}`}$</h3>
                <h4>Last movements:</h4>
                <div id="balancesContainer">
                    {lastMovements.map((movement, index) => <p key={movement.id} className={`${movement.isProfit ? 'isProfit' : 'isLoss'}`}>{`${index + 1} - ${movement.amount} - ${movement.concept} - ${movement.date}`}</p>)}
                </div>
            </main>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        lastMovements: state.movementReducer.lastMovements,
        balance: state.movementReducer.balance
    }
}
const mapDispatchToProps = {
    getMovements: movementActions.getMovements
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)