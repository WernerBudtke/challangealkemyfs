import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <h1>My Finances</h1>
                <nav>
                    <NavLink exact to="/">
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/movements">
                        <p>Movements</p>
                    </NavLink>
                    <NavLink to="/add">
                        <p>New Operation</p>
                    </NavLink>
                </nav>
            </header>
        </>
    )
}
export default Header