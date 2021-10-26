import './App.css'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './pages/Form'
import Movements from './pages/Movements'
function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path ="/" component={Home}/>
                <Route path="/add" component={Form}/>
                <Route path="/movements" component={Movements}/>
                <Redirect to="/" />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps)(App);
